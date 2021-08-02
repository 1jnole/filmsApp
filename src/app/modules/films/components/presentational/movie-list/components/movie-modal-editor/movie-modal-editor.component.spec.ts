import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModalEditorComponent } from './movie-modal-editor.component';

describe('MovieEditorComponent', () => {
  let component: MovieModalEditorComponent;
  let fixture: ComponentFixture<MovieModalEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieModalEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieModalEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
