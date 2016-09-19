'use strict';
(function () {
    function Maksout() {

        var _this = this;

        function createCollections() {
            var listNodes = document.body.getElementsByTagName("*");

            for (var i = 0; i < listNodes.length; i++) {
                if (listNodes[i].dataset !== undefined && listNodes[i].dataset.modal !== undefined) {
                    _this.collections.modal.push(listNodes[i].dataset.modal);
                    listNodes[i].setAttribute('id', listNodes[i].dataset.modal + "Modal");
                } else if (listNodes[i].dataset !== undefined && listNodes[i].dataset.text !== undefined) {
                    _this.collections.text.push(listNodes[i].dataset.text);
                    listNodes[i].setAttribute('id', listNodes[i].dataset.text + "Text");
                }
            }
        }

        function events() {

            _this.collections.modal.forEach(function (item, i, arr) {
                var oneModal = document.getElementById(item + "Modal");
                var oneText = document.getElementById(item + "Text");

                oneModal.addEventListener('keyup', function () {
                    oneText.innerHTML = oneModal.value;
                });
                console.log(item);
            });
        }

        this.collections = {
            modal: [],
            text: []
        };

        this.applybind = function (data) {
            createCollections();
            events();


            console.log(this.collections);
        };

        this.observable = function () {
            var attributeName = "data-bind";

            /*var elems = document.body.childNodes;
             console.log(elems[0]);
             var arr = Array.prototype.slice.call( elems, 0 );

             elems.forEach(function(item, i, arr) {
             //console.log( i + ": " + item + " (массив:" + arr + ")" );
             });
             var nameLengths = arr.map(function(elem) {
             if(elem.dataset !== undefined){
             console.log(elem.dataset.getDataAttr());
             }

             //return elem.dataset.bind;
             });*/
            //var show = msglist.getAttribute("data-bind");
            /*console.log(elems);
             console.log(arr);*/
        }
    }

    Object.prototype.mk = new Maksout();
})();






