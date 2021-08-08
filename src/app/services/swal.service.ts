import {Injectable} from '@angular/core';
import swal, {SweetAlertOptions, SweetAlertResult} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  private staticParams = {
    buttonsStyling: false,
    confirmButtonClass: 'text-white bg-purple-700 border-0 py-2 px-3 mx-4 focus:outline-none hover:bg-purple-400 rounded',
    cancelButtonClass: 'text-white bg-red-500 border-0 py-2 px-3 mx-4 focus:outline-none hover:bg-red-400 rounded'
  };

  constructor() {}

  openSwal(params: SweetAlertOptions): Promise<SweetAlertResult> {
    const _params = Object.assign({}, params);
    return swal.fire(Object.assign({}, this.staticParams, _params));
  }

}
