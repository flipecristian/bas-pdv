import { TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';


describe('InputComponent', () => {
    let component: InputComponent;

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [
                InputComponent
            ]
        });
        const fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('Component Should Instaciad', () => {
        expect(component).toBeTruthy();
    });
});