import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
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
NgxInputMaskerDirective.ɵfac = function NgxInputMaskerDirective_Factory(t) { return new (t || NgxInputMaskerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NgxInputMaskerDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxInputMaskerDirective, selectors: [["", "NgxInputMasker", ""]], hostBindings: function NgxInputMaskerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("input", function NgxInputMaskerDirective_input_HostBindingHandler($event) { return ctx.onInput($event); });
    } }, inputs: { maskCode: ["NgxInputMasker", "maskCode"], customContainerSettings: "customContainerSettings", customMaskSettings: "customMaskSettings", containerClass: "containerClass", type: "type" }, outputs: { valueChange: "valueChange" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxInputMaskerDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NgxInputMasker]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { maskCode: [{
            type: Input,
            args: ['NgxInputMasker']
        }], customContainerSettings: [{
            type: Input
        }], customMaskSettings: [{
            type: Input
        }], containerClass: [{
            type: Input
        }], type: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWlucHV0LW1hc2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3J5YW4uaG9mZm1hbi9EZXNrdG9wL3BlcnNvbmFsL2lucHV0LW1hc2tlci9wcm9qZWN0cy9uZ3gtaW5wdXQtbWFza2VyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC1tYXNrZXIvbmd4LWlucHV0LW1hc2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVILFNBQVMsRUFFVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRVQsTUFBTSxlQUFlLENBQUM7O0FBTXZCLE1BQU0sT0FBTyx1QkFBdUI7SUFTaEMsWUFBb0IsRUFBYyxFQUFVLEdBQXNCO1FBQTlDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVJ6QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzlCLDRCQUF1QixHQUFpQyxFQUFFLENBQUM7UUFDM0QsdUJBQWtCLEdBQWlDLEVBQUUsQ0FBQztRQUV0RCxTQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2pCLGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFLekUsQ0FBQztJQUdELE9BQU8sQ0FBQyxLQUFLO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXZELENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDL0MsSUFBSSxPQUFPLENBQUMsSUFB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QyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRTlFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs4RkFoRlEsdUJBQXVCOzREQUF2Qix1QkFBdUI7MEdBQXZCLG1CQUFlOztrREFBZix1QkFBdUI7Y0FKbkMsU0FBUztlQUFDO2dCQUNQLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGtCQUFrQjthQUMvQjs2RkFFNEIsUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxnQkFBZ0I7WUFDZCx1QkFBdUI7a0JBQS9CLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0ksV0FBVztrQkFBcEIsTUFBTTtZQVFQLE9BQU87a0JBRE4sWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnW05neElucHV0TWFza2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4SW5wdXRNYXNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCdOZ3hJbnB1dE1hc2tlcicpIG1hc2tDb2RlID0gJyc7XG4gICAgQElucHV0KCkgY3VzdG9tQ29udGFpbmVyU2V0dGluZ3M6IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj4gPSB7fTtcbiAgICBASW5wdXQoKSBjdXN0b21NYXNrU2V0dGluZ3M6IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj4gPSB7fTtcbiAgICBASW5wdXQoKSBjb250YWluZXJDbGFzcz86IHN0cmluZztcbiAgICBASW5wdXQoKSB0eXBlID0gJ3Bhc3N3b3JkJztcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICAgIG9uSW5wdXQoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVCb3goKTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSk7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5idWlsZEJveCgpO1xuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9IHRoaXMuY29udGFpbmVyQ2xhc3M7XG4gICAgICAgICAgICBpZiAoY2hhbmdlcy50eXBlLmN1cnJlbnRWYWx1ZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICB1cGRhdGVCb3goKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5zcGxpdCgnJyk7XG4gICAgICAgIGZvciAoY29uc3QgY2hhciBvZiBzcGxpdCkge1xuICAgICAgICAgICAgY29uc3QgbWFza09iamVjdDogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbWFza09iamVjdC5pbm5lckhUTUwgPSB0aGlzLm1hc2tDb2RlO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmN1c3RvbU1hc2tTZXR0aW5ncykge1xuICAgICAgICAgICAgICAgIG1hc2tPYmplY3Quc3R5bGVba2V5XSA9IHRoaXMuY3VzdG9tTWFza1NldHRpbmdzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXNrT2JqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBidWlsZEJveCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5tYXhXaWR0aCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIDEwICsgJ3B4JztcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCArICdweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdCArICdweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucGFkZGluZ0xlZnQgPSAnNXB4JztcblxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jdXN0b21Db250YWluZXJTZXR0aW5ncykge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGVba2V5XSA9IHRoaXMuY3VzdG9tQ29udGFpbmVyU2V0dGluZ3Nba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIH1cblxufVxuIl19