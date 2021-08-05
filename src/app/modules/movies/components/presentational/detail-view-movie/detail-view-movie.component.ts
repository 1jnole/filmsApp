import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {MovieEntity} from "../../../../../model/entities/movie/movie.entity";
import {SwalService} from "../../../../../services/swal.service";

@Component({
  selector: 'app-detail-view-movie',
  templateUrl: './detail-view-movie.component.html',
  styleUrls: ['./detail-view-movie.component.scss']
})
export class DetailViewMovieComponent implements OnInit {

  @Input() movie!: MovieInterface;

  @Output() edit = new EventEmitter<MovieEntity>();
  @Output() delete = new EventEmitter<number>();

  constructor(private swalService: SwalService) {
  }

  editMovie() {
    this.edit.emit(this.movie)
  }

  deleteMovie() {
    this.swalService.openSwal({
      title: 'Are you sure you want delete the selected item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Accept',
      cancelButtonText: 'Cancel'
    }).then((res) => {
      if (res.isConfirmed) {
        this.delete.emit(this.movie.id);
      }
    });
  }

  ngOnInit(): void {
  }

}
