# NgxInputMakser


### How to use

```typescript
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgxInputMaskerModule,
  ],
  providers: [...],
  bootstrap: [...]
})


```

```html
    <input
         NgxInputMasker="&#10052;"
         [customContainerSettings]="{}"
         [customMaskSettings]="{}"
        [containerClass] = 'maskerContainer'
>
```

### Inputs :

1. NgxInputMasker: [string]()
2. customContainerSettings: [CSSStyleDeclaration]()
2. customMaskSettings: [CSSStyleDeclaration]()
4. containerClass: [string]()


### customContainerSettings
These are the styles for the container of the div created ontop of the input field.
any css styling that can be applied to a div can be applied here. 

Note: The div is outside of the angular scope

### customMaskSettings
These are the styles for special char created as a span element 
Note: The span is outside of the angular scope

 
 
###  DEMO : 


![alt text](https://media.giphy.com/media/7b24q3k3f5EMC1bCaM/source.gif "Logo Title Text 1")
