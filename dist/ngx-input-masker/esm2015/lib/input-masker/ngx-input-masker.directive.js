import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
export class NgxInputMaskerDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWlucHV0LW1hc2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL21udC9jL1VzZXJzL2hvcGVtL0RvY3VtZW50cy9HaXRIdWIvbmd4LWlucHV0LW1hc2tlci9wcm9qZWN0cy9uZ3gtaW5wdXQtbWFza2VyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC1tYXNrZXIvbmd4LWlucHV0LW1hc2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFVCxNQUFNLGVBQWUsQ0FBQztBQU12QixNQUFNLE9BQU8sdUJBQXVCO0lBU2hDLFlBQW9CLEVBQWMsRUFBVSxHQUFzQjtRQUE5QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFSekMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM5Qiw0QkFBdUIsR0FBaUMsRUFBRSxDQUFDO1FBQzNELHVCQUFrQixHQUFpQyxFQUFFLENBQUM7UUFFdEQsU0FBSSxHQUFHLFVBQVUsQ0FBQztRQUNqQixnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBS3pFLENBQUM7SUFHRCxPQUFPLENBQUMsS0FBSztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV2RCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFD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SSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUU5RSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBcEZKLFNBQVMsU0FBQztnQkFDUCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0I7OztZQWJHLFVBQVU7WUFGVixpQkFBaUI7Ozt1QkFpQmhCLEtBQUssU0FBQyxnQkFBZ0I7c0NBQ3RCLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLO21CQUNMLEtBQUs7MEJBQ0wsTUFBTTtzQkFPTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgICBzZWxlY3RvcjogJ1tOZ3hJbnB1dE1hc2tlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hJbnB1dE1hc2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgnTmd4SW5wdXRNYXNrZXInKSBtYXNrQ29kZSA9ICcnO1xyXG4gICAgQElucHV0KCkgY3VzdG9tQ29udGFpbmVyU2V0dGluZ3M6IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj4gPSB7fTtcclxuICAgIEBJbnB1dCgpIGN1c3RvbU1hc2tTZXR0aW5nczogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPiA9IHt9O1xyXG4gICAgQElucHV0KCkgY29udGFpbmVyQ2xhc3M/OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB0eXBlID0gJ3Bhc3N3b3JkJztcclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcclxuICAgIG9uSW5wdXQoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJveCgpO1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJ1aWxkQm94KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gdGhpcy5jb250YWluZXJDbGFzcztcclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMudHlwZS5jdXJyZW50VmFsdWUgPT09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUJveCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5zcGxpdCgnJyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGFyIG9mIHNwbGl0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hc2tPYmplY3Q6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgbWFza09iamVjdC5pbm5lckhUTUwgPSB0aGlzLm1hc2tDb2RlO1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jdXN0b21NYXNrU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIG1hc2tPYmplY3Quc3R5bGVba2V5XSA9IHRoaXMuY3VzdG9tTWFza1NldHRpbmdzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFza09iamVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYnVpbGRCb3goKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5tYXhXaWR0aCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIDEwICsgJ3B4JztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wICsgJ3B4JztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzVweCc7XHJcblxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY3VzdG9tQ29udGFpbmVyU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGVba2V5XSA9IHRoaXMuY3VzdG9tQ29udGFpbmVyU2V0dGluZ3Nba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19