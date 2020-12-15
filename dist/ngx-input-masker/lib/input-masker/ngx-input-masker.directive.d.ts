import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
}
