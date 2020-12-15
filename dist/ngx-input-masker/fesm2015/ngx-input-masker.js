import { EventEmitter, Directive, ElementRef, ChangeDetectorRef, Input, Output, HostListener, NgModule } from '@angular/core';

class NgxInputMaskerDirective {
    constructor(el, ref) {
        this.el = el;
        this.ref = ref;
        this.maskCode = '';
        this.customContainerSettings = {};
        this.customMaskSettings = {};
        this.type = 'password';
        this.valueChange = new EventEmitter();
    }
    onInput(event) {
        this.updateBox();
        this.valueChange.emit(this.el.nativeElement.value);
    }
    ngOnInit() {
        this.buildBox();
    }
    ngOnChanges(changes) {
        if (this.container) {
            this.container.className = this.containerClass;
            if (changes.type.currentValue === 'password') {
                this.el.nativeElement.style.color = 'transparent';
                this.container.style.opacity = '1';
            }
            else {
                this.el.nativeElement.style.color = 'black';
                this.container.style.opacity = '0';
            }
        }
    }
    updateBox() {
        this.container.innerHTML = '';
        const split = this.el.nativeElement.value.split('');
        for (const char of split) {
            const maskObject = document.createElement('span');
            maskObject.innerHTML = this.maskCode;
            // tslint:disable-next-line:forin
            for (const key in this.customMaskSettings) {
                maskObject.style[key] = this.customMaskSettings[key];
            }
            this.container.appendChild(maskObject);
        }
    }
    buildBox() {
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
        this.container.style.paddingLeft = '5px';
        // tslint:disable-next-line:forin
        for (const key in this.customContainerSettings) {
            this.container.style[key] = this.customContainerSettings[key];
        }
        this.container.addEventListener('click', () => this.el.nativeElement.focus());
        document.body.appendChild(this.container);
    }
}
NgxInputMaskerDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NgxInputMasker]'
            },] }
];
NgxInputMaskerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NgxInputMaskerDirective.propDecorators = {
    maskCode: [{ type: Input, args: ['NgxInputMasker',] }],
    customContainerSettings: [{ type: Input }],
    customMaskSettings: [{ type: Input }],
    containerClass: [{ type: Input }],
    type: [{ type: Input }],
    valueChange: [{ type: Output }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
};

class NgxInputMaskerModule {
}
NgxInputMaskerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxInputMaskerDirective],
                imports: [],
                exports: [NgxInputMaskerDirective]
            },] }
];

/*
 * Public API Surface of ngx-input-masker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxInputMaskerDirective, NgxInputMaskerModule };
//# sourceMappingURL=ngx-input-masker.js.map
