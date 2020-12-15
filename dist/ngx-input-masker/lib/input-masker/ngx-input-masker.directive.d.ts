import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxInputMaskerDirective implements OnInit, OnChanges {
    private el;
    private ref;
    maskCode: string;
    customContainerSettings: Partial<CSSStyleDeclaration>;
    customMaskSettings: Partial<CSSStyleDeclaration>;
    containerClass?: string;
    type: string;
    valueChange: EventEmitter<string>;
    container: HTMLDivElement;
    constructor(el: ElementRef, ref: ChangeDetectorRef);
    onInput(event: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updateBox(): void;
    buildBox(): void;
    static ɵfac: i0.ɵɵFactoryDef<NgxInputMaskerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxInputMaskerDirective, "[NgxInputMasker]", never, { "maskCode": "NgxInputMasker"; "customContainerSettings": "customContainerSettings"; "customMaskSettings": "customMaskSettings"; "containerClass": "containerClass"; "type": "type"; }, { "valueChange": "valueChange"; }, never>;
}
//# sourceMappingURL=ngx-input-masker.directive.d.ts.map