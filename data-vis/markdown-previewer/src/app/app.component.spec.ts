import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MarkPipe } from './mark.pipe';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, MaterialModule.forRoot()],
      declarations: [
        MarkPipe,
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Markdown Previewer'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Markdown Previewer');
  }));
});
