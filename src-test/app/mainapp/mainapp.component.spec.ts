import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainappComponent } from './mainapp.component';
import { PostService } from '../PostService.service';
import { MockService } from '../MockService';
import { By } from '@angular/platform-browser';
// test suite
describe('MainappComponent', () => {
  let component: MainappComponent;
  let fixture: ComponentFixture<MainappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainappComponent],
      providers:[{provide:PostService,useClass: MockService}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // test case
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check the username', () => {
    expect(component.username).toBe('admin');
  });
  it('check the array', () => {
    component.users = [
      { name: 'admin' }, { name: 'manager' }
    ]
    fixture.detectChanges()
    const container = fixture.nativeElement.querySelector('#user-container')
    const listItems = container.querySelectorAll('li')
    expect(listItems.length).toBe(2)
    expect(listItems[0].textContent).toContain('admin')
    expect(listItems[1].textContent).toContain('manager')
  })

  it('check the array', () => {
     
    fixture.detectChanges()
    const container = fixture.nativeElement.querySelector('p')
   expect(container).toBeTruthy()
    expect(container.textContent).toContain('no user found')
  })
  it('check mock data',()=>{
    const listItems= fixture.debugElement.queryAll(By.css('li'))
    expect(listItems.length).toBe(2)
     expect(listItems[0].nativeElement.textContent).toContain('mock title')
  })
});
