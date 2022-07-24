import {ElementRef} from '@angular/core'
// @ts-ignore
declare const M;
export interface MaterialInstance {
  open?(): void
  close?(): void
  destroy?(): void
}
export class MaterialService {
  static toast(message: string) {

    M.toast({html: message})
  }

  static updateTextInputs() {
    M.updateTextFields();
  }
  static initModal(ref:ElementRef): MaterialInstance {
    return M.Modal.init(ref.nativeElement)
  }



}
