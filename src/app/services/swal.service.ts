import {Injectable} from '@angular/core';
import swal, {SweetAlertOptions, SweetAlertResult} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  private staticParams = {
    buttonsStyling: false,
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn btn-default'
  };

  constructor() {}

  openSwal(params: SweetAlertOptions): Promise<SweetAlertResult> {
    const _params = Object.assign({}, params);
    return swal.fire(Object.assign({}, this.staticParams, _params));
  }

}
