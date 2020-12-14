import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[NgxInputMasker]'
})
export class NgxInputMaskerDirective implements OnInit, OnChanges{
    @Input('NgxInputMasker') maskCode = '';
    @Input() customContainerSettings: Partial<CSSStyleDeclaration> = {};
    @Input() customMaskSettings: Partial<CSSStyleDeclaration> = {};
    @Input() containerClass?: string;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
    container: HTMLDivElement;

    constructor(private el: ElementRef, private ref: ChangeDetectorRef) {

    }

    @HostListener('input', ['$event'])
    onInput(event): void {
        this.updateBox();
        this.valueChange.emit(this.el.nativeElement.value);

    }

    ngOnInit(): void {
       this.buildBox();

    }

  ngOnChanges(changes: SimpleChanges): void {
        this.container.className = this.containerClass;
  }

    updateBox(): void {
        this.container.innerHTML = '';
        const split = this.el.nativeElement.value.split('');
        for (const char of split) {
            const maskObject: HTMLSpanElement = document.createElement('span');
            maskObject.innerHTML = this.maskCode;
            // tslint:disable-next-line:forin
            for (const key in this.customMaskSettings) {
                maskObject.style[key] = this.customMaskSettings[key];
            }
            this.container.appendChild(maskObject);
        }

    }



    buildBox(): void {
        this.el.nativeElement.style.color = 'transparent';
        this.container = document.createElement('div');
        this.container.style.width = this.el.nativeElement.offsetWidth + 'px';
        this.container.style.maxWidth = this.el.nativeElement.offsetWidth - 10 + 'px';
        this.container.style.overflow = 'hidden';
        this.container.style.height = this.el.nativeElement.offsetHeight + 'px';
        this.container.style.position = 'fixed';
        this.container.style.top = this.el.nativeElement.offsetTop + 'px';
        this.container.style.left = this.el.nativeElement.offsetLeft + 'px';
        this.container.style.display = 'flex';
        this.container.style.alignItems = 'center';
        this.container.style.paddingLeft =  '5px';

            // tslint:disable-next-line:forin
            for (const key in this.customContainerSettings) {
                this.container.style[key] = this.customContainerSettings[key];
            }

        this.container.addEventListener('click', () => this.el.nativeElement.focus());

        document.body.appendChild(this.container);
    }

}
