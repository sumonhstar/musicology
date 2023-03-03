'use strict';

        // ===preloader====
        const loader = document.querySelector("[data-preloader]");
        window.addEventListener("load", function(){
            loader.style.display = "none";
        });

        // =====fixed-nav-&-back-to-top===
        const backToTop = document.querySelector('[data-back-to-top]'),
              fixedNav = document.querySelector('[data-nav-fixed]');

        const scroll = function(){
            if(this.scrollY >= 180){
                backToTop.classList.add('enable');
                fixedNav.classList.add('fixed');
            }
            else{
                backToTop.classList.remove('enable');
                fixedNav.classList.remove('fixed');
            };
        };
        window.addEventListener('scroll', scroll);

        // ====small-device-side-menu====
        const openMenu = document.querySelector('[data-open-menu]'),
              closeMenu = document.querySelector('[data-close-menu]'),
              navMenu = document.querySelector('[data-nav-menu]'),
              listLink = document.querySelectorAll('[data-list]');

              openMenu.addEventListener('click', function(){
                navMenu.classList.add('active');
              });
              closeMenu.addEventListener('click', function(){
                navMenu.classList.remove('active');
              });
              
              for(let i = 0; i < listLink.length; i++){
                listLink[i].addEventListener('click', function(){
                navMenu.classList.remove('active');
              });
              };