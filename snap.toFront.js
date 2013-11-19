Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype;
    elproto.toFront = function () {
        this.appendTo(this.paper);
        return this

    };
    elproto.toBack = function () {
        this.prependTo(this.paper);
        return this
    };
})