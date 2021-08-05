import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    isDark = true;
    constructor(private render: Renderer2) {
        if(this.isDark === true) {
            this.render.setAttribute(document.documentElement, 'class', 'dark');
        }else {
            this.render.setAttribute(document.documentElement, 'class', 'light');
        }
    }

    ngOnInit(): void {}

    toggleTheme(event: any) {
        if(event.checked === true) {
            this.render.setAttribute(document.documentElement, 'class', 'dark');
        }else {
            this.render.setAttribute(document.documentElement, 'class', 'light');
        }
    }
}
