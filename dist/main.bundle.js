webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_infinite_scroll__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__movies_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__favourite_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__genre_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__favourites_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_9__favourite_component__["a" /* FavouriteComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */], __WEBPACK_IMPORTED_MODULE_5_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard/name',
                    component: __WEBPACK_IMPORTED_MODULE_8__dashboard_component__["a" /* DashboardComponent */]
                },
                {
                    path: 'dashboard',
                    component: __WEBPACK_IMPORTED_MODULE_8__dashboard_component__["a" /* DashboardComponent */]
                },
                {
                    path: 'favourites',
                    component: __WEBPACK_IMPORTED_MODULE_9__favourite_component__["a" /* FavouriteComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__movies_service__["a" /* MoviesService */], __WEBPACK_IMPORTED_MODULE_10__genre_service__["a" /* GenreService */], __WEBPACK_IMPORTED_MODULE_11__favourites_service__["a" /* FavouritesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__genre_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movies_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favourites_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(genreserve, movieserve, favserve, http) {
        var _this = this;
        this.genreserve = genreserve;
        this.movieserve = movieserve;
        this.favserve = favserve;
        this.http = http;
        this.text = 'Search for a movie here...';
        this.genre = [];
        this.selected_movie = null;
        this.genreserve.getGenre()
            .subscribe(function (data) { return _this.genre = data.genres; }, function (error) { return alert(error); });
    }
    DashboardComponent.prototype.onSelect = function (movie) {
        this.selected_movie = movie;
    };
    DashboardComponent.prototype.clearSelection = function () {
        this.selected_movie = null;
    };
    DashboardComponent.prototype.addToFav = function (movie) {
        var _this = this;
        this.favserve.postMovies(movie).subscribe(function (data) {
            _this.favourite = true;
            alert('This movie has been added to your favourites\' list');
        });
    };
    DashboardComponent.prototype.deleteFromFav = function (movie) {
        var _this = this;
        return this.favserve.deleteMovies(movie).subscribe(function (data) {
            _this.favourite = false;
            alert('This movie has been removed from your favourites\' list');
        });
    };
    DashboardComponent.prototype.favcheck = function (movie) {
        var _this = this;
        if (movie) {
            this.favserve.checkStatus(movie).subscribe(function (data) {
                _this.favourite = data;
            });
        }
        // const url = `http://localhost:4000/api/favourites/exists/${movie}`;
        // return this.http.get(url).map(res => res.json()).subscribe(data => {
        //     return data._body;
        // });
    };
    DashboardComponent.prototype.search = function (movie) {
        var _this = this;
        this.searchval = movie.value;
        this.pager = 1;
        if (movie.value) {
            return this.movieserve.getMovies(this.searchval, this.pager).subscribe(function (data) {
                _this.moviedata = data.results;
                _this.total = data.total_pages;
            });
        }
    };
    DashboardComponent.prototype.replacer = function (genre) {
        var genrename = [];
        this.genre.forEach(function (d) {
            if (genre.includes(d.id)) {
                genrename.push(' ' + d.name);
            }
        });
        return genrename;
    };
    DashboardComponent.prototype.onScroll = function () {
        var _this = this;
        if ((this.searchval) && (this.pager < this.total)) {
            return this.movieserve.getMovies(this.searchval, ++this.pager).subscribe(function (data) {
                (data.results).forEach(function (d) {
                    _this.moviedata.push(d);
                });
            });
        }
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('placeholder'),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "text", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dash-board',
        template: __webpack_require__(160),
        styles: [__webpack_require__(77)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__genre_service__["a" /* GenreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__genre_service__["a" /* GenreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__movies_service__["a" /* MoviesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__movies_service__["a" /* MoviesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__favourites_service__["a" /* FavouritesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__favourites_service__["a" /* FavouritesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Http */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favourites_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__genre_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouriteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouriteComponent = (function () {
    function FavouriteComponent(favserve, genreserve) {
        this.favserve = favserve;
        this.genreserve = genreserve;
        this.genres = new Array;
        this.selected_movie = null;
        this.searcher();
    }
    FavouriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.favserve.getMovies().subscribe(function (data) {
            _this.moviedata = data;
            _this.movies = _this.moviedata;
        });
    };
    FavouriteComponent.prototype.searcher = function () {
        var _this = this;
        this.genreserve.getGenre()
            .subscribe(function (data) { return _this.genre = data.genres; }, function (error) { return alert(error); });
    };
    FavouriteComponent.prototype.onSelect = function (movie) {
        this.selected_movie = movie;
    };
    FavouriteComponent.prototype.clearSelection = function () {
        this.selected_movie = null;
    };
    FavouriteComponent.prototype.replacer = function (genre) {
        var genrename = new Array;
        if (genre) {
            this.genre.forEach(function (d) {
                if (genre.includes(d.id)) {
                    genrename.push(' ' + d.name);
                }
            });
        }
        return genrename;
    };
    FavouriteComponent.prototype.categoryCall = function (category) {
        this.search();
        this.moviedata.forEach(function (d, i) {
            // console.log(Object.keys(d));
        });
    };
    FavouriteComponent.prototype.search = function () {
        var _this = this;
        return this.favserve.getMovies().subscribe(function (data) {
            _this.moviedata = data;
        });
    };
    FavouriteComponent.prototype.deleteFromFav = function (movie) {
        var _this = this;
        this.favserve.deleteMovies(movie).subscribe(function (data) {
            alert('This has now been removed from your favourites\' list');
            _this.searcher();
        });
    };
    FavouriteComponent.prototype.updateMovie = function (movie, details, adult, release, score) {
        movie.overview = details.value;
        movie.adult = adult.value;
        movie.release_date = release.value;
        movie.vote_average = score.value;
        return this.favserve.updateMovies(movie).subscribe(function (data) {
            alert('Record has been updated');
        });
    };
    return FavouriteComponent;
}());
FavouriteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-favourite-board',
        template: __webpack_require__(161),
        styles: [__webpack_require__(77)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__favourites_service__["a" /* FavouritesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__favourites_service__["a" /* FavouritesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__genre_service__["a" /* GenreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__genre_service__["a" /* GenreService */]) === "function" && _b || Object])
], FavouriteComponent);

var _a, _b;
//# sourceMappingURL=favourite.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, "nav {\n    position: absolute;\n    right: 50px;\n    top: 90px;\n}\nlabel, h1 {\n    color: white;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <a  class=\"btn btn-primary\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Search</a>\n    <a  class=\"btn btn-primary\" routerLink=\"/favourites\" routerLinkActive=\"active\">Favourites</a>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"  *ngIf=\"(!selected_movie)\">\n\n\n\n    <div class=\"boundingbox\">\n        <img [src]=\"'/assets/images/hero_squid.png'\">\n        <input #movieholder placeholder=\"{{text}}\" class=\"form-control\" >\n        <button class=\"btn btn-success btn-fire\" (click)=\"search(movieholder)\"><span class=\"fa fa-search\"> Search...</span></button>\n\n    </div>\n\n\n</div>\n\n<div id=\"movie_listing\" class=\"container\" *ngIf=\"(!selected_movie)\" infiniteScroll\n     [infiniteScrollDistance]=\"1\"\n     [infiniteScrollThrottle]=\"400\"\n     (scrolled)=\"onScroll()\">\n\n    <ul *ngIf=\"moviedata\">\n        <li *ngFor=\"let movie of moviedata\" (error)=\"alert(' No Data Available ')\">\n            <div class=\"col-sm-6\">\n                <section class=\"first\">\n                    <span class=\"title-tag\" (click)=\"onSelect(movie)\"><a>{{movie.title}}</a></span>\n                    <a (click)=\"onSelect(movie)\"><img class=\"poster\" [src]=\"'https://image.tmdb.org/t/p/w300'+movie.poster_path\"   alt={{movie.original_title}}  onError=\"this.src='assets/images/bg.jpg';\"   ></a>\n                    <p class=\"overview\">{{movie.overview}}</p>\n                </section>\n                <section class=\"second\">\n                    <span class=\"fa fa-film fa-2x\"></span>\n                    <span class=\"genres\" >{{replacer(movie.genre_ids) }}</span>\n\n                    <div class=\"pull-right\" >\n                        <a class=\"btn btn-info\" (click)=\"onSelect(movie)\" >Know more <span class=\"fa fa-arrow-right\" aria-hidden=\"true\"></span></a>\n                      </div>\n                </section>\n            </div>\n        </li>\n    </ul>\n</div>\n<div class=\"container\" *ngIf=\"(!selected_movie)\">\n    <h2 #a *ngIf=\"!moviedata\" class=\"nodata\"><label><span class=\"fa fa-hand-pointer-o\" aria-hidden=\"true\"></span> Type a word to search.. <span class=\"fa fa-hand-pointer-o\" aria-hidden=\"true\"></span></label></h2>\n    <h2 #c *ngIf=\"(moviedata !== undefined)\"  class=\"nodata\" > Aww Crap! <span class=\"fa fa-frown-o\" aria-hidden=\"true\"></span> No Data, maybe movies are still into making <span class=\"fa fa-smile-o\" aria-hidden=\"true\"></span> </h2>\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"(selected_movie)\">{{(favcheck(selected_movie.id))}}\n    <a  class=\"btn btn-warning pull-right back-button\"  (click)=\"clearSelection();\"><span class=\"fa fa-undo\"></span> go back...</a>\n    <a #falsefav class=\"btn btn-default pull-right fav-button\" *ngIf=\"!(this.favourite)\" (click)=\"deleteFromFav(selected_movie.id)\" ><span class=\"fa fa-star-o\" aria-hidden=\"true\"></span></a>\n    <a #truefav class=\"btn btn-success pull-right fav-button\" *ngIf=\"!(this.favourite)\" (click)=\"addToFav(selected_movie)\" ><span class=\"fa fa-star\" aria-hidden=\"true\"></span></a>\n\n\n    <div class=\"container\">\n\n    <a><img class=\"cover_photo\" [src]=\"'https://image.tmdb.org/t/p/w500'+selected_movie.backdrop_path\"   alt={{selected_movie.original_title}}  onError=\"this.src='assets/images/bg.jpg';\" (click)=\"onSelect(movie)\" ></a>\n    <h1>{{selected_movie.original_title}}</h1>\n    <label>Details: </label><span> {{selected_movie.overview}}</span><br>\n    <label>18+: </label><span> {{selected_movie.adult}}</span><br>\n    <label>Release Date: </label><span> {{selected_movie.release_date}}</span><br>\n    <label>Type/ Genre: </label><span> {{replacer(selected_movie.genre_ids)}}</span><br>\n    <label>Score:</label><span> {{selected_movie.vote_average}}</span>\n    </div>\n</div>\n"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div class=\"back_pic container-fluid\" *ngIf=\"(!selected_movie)\" >\n    <ul id=\"category\" *ngIf=\"genres\"><li *ngFor=\"let category of genre\"><a class=\"btn btn-default\" (click)=\"categoryCall(category.id)\">{{category.name}}</a></li></ul>\n    <ul *ngIf=\"moviedata\" class=\"container\" id=\"back-coloring\">\n        <li *ngFor=\"let movie of movies\" (error)=\"alert(' No Data Available ')\">\n            <div class=\"col-sm-6\">\n                <section class=\"first\">\n                    <span class=\"title-tag\" (click)=\"onSelect(movie)\"><a >{{movie.title}}</a></span>\n                    <a><img class=\"poster\" [src]=\"'https://image.tmdb.org/t/p/w300'+movie.poster_path\" alt={{movie.original_title}}  (click)=\"onSelect(movie)\" onError=\"this.src='assets/images/bg.jpg';\" ></a>\n                    <p class=\"overview\">{{movie.overview}}</p>\n                </section>\n                <section class=\"second\">\n                    <span class=\"fa fa-film fa-2x\"></span>\n                    <span class=\"genres\">{{replacer(movie.genre_ids)}}</span>\n\n                    <div class=\"pull-right\">\n                        <a class=\"btn btn-info\" (click)=\"onSelect(movie)\">edit..</a>\n                     <a class=\"btn btn-default\" (click)=\"deleteFromFav(movie.id)\" ><span class=\"fa fa-star-o\" aria-hidden=\"true\"> Remove Favourite</span></a>\n                    </div>\n                </section>\n            </div>\n        </li>\n    </ul>\n    <h2 #c *ngIf=\"(moviedata !== undefined) \"  class=\"nodata\" > Aww Crap! No Data! go to search and add some movies to your favourites..<span class=\"fa fa-smile-o\" aria-hidden=\"true\"></span> </h2>\n</div>\n    <div class=\"container-fluid\" *ngIf=\"(selected_movie)\">\n        <a  class=\"btn btn-warning pull-right back-button\"  (click)=\"clearSelection();\"><span class=\"fa fa-undo\"></span> go back...</a>\n\n        <div class=\"container\">\n\n            <a><img class=\"cover_photo\" [src]=\"'https://image.tmdb.org/t/p/w500'+selected_movie.backdrop_path\"   alt={{selected_movie.original_title}}  onError=\"this.src='assets/images/bg.jpg';\" (click)=\"onSelect(movie)\" ></a>\n            <hr>\n            <form class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2 control-label\"> Title (Can't be edited): </label>\n                    <div class=\"col-sm-10\">\n                        <h2 #title>{{selected_movie.original_title}}</h2>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2 control-label\">Details: </label>\n                    <div class=\"col-sm-10\">\n                        <input #details type=\"text\" class=\"form-control\"  value=\"{{selected_movie.overview}}\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2 control-label\">18+: </label>\n                    <div class=\"col-sm-10\">\n                        <input #adult type=\"text\" class=\"form-control\" value=\"{{selected_movie.adult}}\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2 control-label\">Release Date: </label>\n                    <div class=\"col-sm-10\">\n                        <input #release type=\"text\"  class=\"form-control\" value=\"{{selected_movie.release_date}}\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2 control-label\">Type/ Genre: </label>\n                    <div class=\"col-sm-10\">\n                        <span #genretype >{{replacer(selected_movie.genre_ids)}}</span>\n                    </div>\n                </div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Score: </label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" #score class=\"form-control\" value=\"{{selected_movie.vote_average}}\">\n                        </div>\n                    </div>\n\n            </form>\n\n\n                <a class=\"btn btn-info pull-right\" (click)=\"updateMovie(selected_movie, details, adult, release, score)\">Save Changes <span class=\"fa fa-check\"></span></a>\n\n\n        </div>\n\n\n</div>\n"

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouritesService = (function () {
    function FavouritesService(http) {
        this.http = http;
    }
    ;
    FavouritesService.prototype.getMovies = function () {
        var url = "http://localhost:4000/api/favourites/";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    FavouritesService.prototype.postMovies = function (movie) {
        var url = "http://localhost:4000/api/favourites/";
        return this.http.post(url, movie);
    };
    FavouritesService.prototype.checkStatus = function (movie) {
        var url = "http://localhost:4000/api/favourites/" + movie;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    FavouritesService.prototype.deleteMovies = function (movie) {
        var url = "http://localhost:4000/api/favourites/" + movie;
        return this.http.delete(url).map(function (res) { return res.json(); });
    };
    FavouritesService.prototype.updateMovies = function (movie) {
        var headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        var url = "http://localhost:4000/api/favourites/" + movie.id;
        return this.http.put(url, movie, headers);
    };
    return FavouritesService;
}());
FavouritesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], FavouritesService);

var _a;
//# sourceMappingURL=favourites.service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenreService = (function () {
    function GenreService(http) {
        this.http = http;
    }
    ;
    GenreService.prototype.getGenre = function () {
        var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return GenreService;
}());
GenreService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], GenreService);

var _a;
//# sourceMappingURL=genre.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = (function () {
    function MoviesService(http) {
        this.http = http;
    }
    ;
    MoviesService.prototype.getMovies = function (movie, page) {
        var url = "https://api.themoviedb.org/3/search/movie?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US&query=" + encodeURIComponent(movie) + "&page=" + page;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return MoviesService;
}());
MoviesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], MoviesService);

var _a;
//# sourceMappingURL=movies.service.js.map

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, ".background {\n    background-image: url(" + __webpack_require__(78) + ");\n    background-size: cover;\n    width: 100%;\n    height: 400px;\n    text-align: center;\n}\n\n\n.back-button {\n    float: right;\n    position: relative;\n    width: 10%;\n    top: 50px;\n    right: 40px;\n\n}\n.fav-button {\n    float: right;\n    position: relative;\n    top: 90px;\n\n}\n\n.boundingbox img{\n    width: 100%;\n}\n\n\n.boundingbox {\n    margin: auto;\n    width: 30%;\n    padding-top: 5%;\n    text-align: left;\n    height: auto;\n}\n.boundingbox input {\n    width: 70%;\n    min-width: 200px;\n    display: inline;\n}\n.boundingbox button {\n    min-width: 25%;\n}\n\nli {\n    text-align: left;\n    text-decoration: none;\n    display: inline;\n}\n\n.poster {\n    max-width: 200px;\n    height: 100%;\n    max-height: 250px;\n    float: left;\n    margin-right: 10px;\n\n\n}\na {\n    margin-top: 10px;\n    text-decoration: none;\n    cursor: hand;\n}\na:hover {\n    text-decoration: none;\n    cursor: hand;\n}\np {\n    width: 500px;\n    text-align: justify;\n}\n\n\n.col-sm-6 {\n    margin-top: 20px;\n    background-color: darkcyan;\n\n}\n.first {\n    max-height: 250px ;\n    min-height: 250px ;\n    overflow: hidden;\n\n}\n.second a, .fa-2x {\n    margin: 5px 5px;\n}\n.pull-right a {\n    margin: 5px 20px;\n}\n.title-tag {\n    display: inline;\n    font-size: 18px;\n    font-family: sans-serif;\n\n}\n.title-tag>a {\n    color: white;\n    size: 18px;\n\n}\n.overview {\n    font-size: 90%;\n    color: white;\n\n}\n.container {\n    background-color: #009688;\n}\n.container-fluid {\n    background-color: #009688;\n    min-height: 800px;\n}\n.genres {\n    font-size: 90%;\n}\n\n\n.nodata {\n    color: white;\n    font-size: x-large;\n    margin: 50px auto;\n    position: relative;\n    min-height: 50px;\n    text-align: center;\n}\n\n.cover_photo {\n    width: 100%;\n\n}\n\nlabel, h1 {\n    color: white;\n}\n#category {\n    padding-top: 50px;\n}\n#category li {\n    margin: 2px;\n\n}\n\n\n@media (max-width: 768px) {\n    .boundingbox {\n        width: 80%;\n        padding-top: 50px;\n        text-align: left;\n        height: auto;\n        transition: width 2s;\n    }\n    .boundingbox input {\n        width: 100%;\n    }\n    .btn-fire {\n        width: 100%;\n    }\n}\n@media (max-width: 500px) {\n    .boundingbox {\n        width: 100%;\n        padding-top: 0;\n        text-align: left;\n        height: auto;\n        transition: width 2s;\n    }\n    .boundingbox input {\n        width: 100%;\n    }\n    .btn-fire {\n        width: 100%;\n    }\n}\n.back_pic {\n    background-image: url(" + __webpack_require__(78) + ");\n    background-size: cover;\n    width: 100%;\n    text-align: center;\n}\n\n#back-coloring {\n    background-color: transparent;\n}\n\nlabel input[type=\"text\"] {\n    background: #009688;\n}\n\n.fifty {\n    width: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "material_splash.f8565f4d4064b6f6c83d.svg";

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 91;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(103);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(159),
        styles: [__webpack_require__(157)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.bundle.js.map