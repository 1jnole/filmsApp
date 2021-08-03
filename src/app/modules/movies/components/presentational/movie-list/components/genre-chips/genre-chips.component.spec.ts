import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GenreChipsComponent} from './genre-chips.component';

describe('GenreChipsComponent', () => {
  let component: GenreChipsComponent;
  let fixture: ComponentFixture<GenreChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenreChipsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
