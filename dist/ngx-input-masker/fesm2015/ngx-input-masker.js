import { EventEmitter, ɵɵdirectiveInject, ElementRef, ChangeDetectorRef, ɵɵdefineDirective, ɵɵlistener, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Directive, Input, Output, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

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
NgxInputMaskerDirective.ɵfac = function NgxInputMaskerDirective_Factory(t) { return new (t || NgxInputMaskerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
NgxInputMaskerDirective.ɵdir = ɵɵdefineDirective({ type: NgxInputMaskerDirective, selectors: [["", "NgxInputMasker", ""]], hostBindings: function NgxInputMaskerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("input", function NgxInputMaskerDirective_input_HostBindingHandler($event) { return ctx.onInput($event); });
    } }, inputs: { maskCode: ["NgxInputMasker", "maskCode"], customContainerSettings: "customContainerSettings", customMaskSettings: "customMaskSettings", containerClass: "containerClass", type: "type" }, outputs: { valueChange: "valueChange" }, features: [ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxInputMaskerDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NgxInputMasker]'
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }]; }, { maskCode: [{
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

class NgxInputMaskerModule {
}
NgxInputMaskerModule.ɵmod = ɵɵdefineNgModule({ type: NgxInputMaskerModule });
NgxInputMaskerModule.ɵinj = ɵɵdefineInjector({ factory: function NgxInputMaskerModule_Factory(t) { return new (t || NgxInputMaskerModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxInputMaskerModule, { declarations: [NgxInputMaskerDirective], exports: [NgxInputMaskerDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxInputMaskerModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxInputMaskerDirective],
                imports: [],
                exports: [NgxInputMaskerDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-input-masker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxInputMaskerDirective, NgxInputMaskerModule };
//# sourceMappingURL=ngx-input-masker.js.map
