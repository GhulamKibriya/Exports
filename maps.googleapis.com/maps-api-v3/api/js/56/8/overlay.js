google.maps.__gjsload__('overlay', function(_) {
    var BD = function(a) {
            this.Fg = a
        },
        nna = function() {},
        CD = function(a) {
            a.Yx = a.Yx || new nna;
            return a.Yx
        },
        ona = function(a) {
            this.Eh = new _.Zm(() => {
                const b = a.Yx;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.vw && a.onAdd) a.onAdd();
                        b.vw = !0;
                        a.draw()
                    }
                } else {
                    if (b.vw)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.vw = !1
                }
            }, 0)
        },
        pna = function(a, b) {
            const c = CD(a);
            let d = c.Ev;
            d || (d = c.Ev = new ona(a));
            _.Pb(c.Rh || [], _.uk);
            var e = c.li = c.li || new _.Sia;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.PB = c.PB || new BD(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.$m(d.Eh);
            c.Rh = [_.sk(a, "panes_changed", e), _.sk(f, "zoom_changed", e), _.sk(f, "offset_changed", e), _.sk(b, "projection_changed", e), _.sk(f, "projectioncenterq_changed", e)];
            _.$m(d.Eh);
            b instanceof _.Pk ? (_.zl(b, "Ox"), _.xl(b, 148440)) : b instanceof _.Ul && (_.zl(b, "Oxs"),
                _.xl(b, 181451))
        },
        una = function(a) {
            if (a) {
                var b = a.getMap();
                if (qna(a) !== b && b && b instanceof _.Pk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new rna(b, a, c.overlayLayer) : c.Gg.then(({
                        lh: d
                    }) => {
                        const e = new sna(b, d);
                        d.Bi(e);
                        c.overlayLayer = e;
                        tna(a);
                        una(a)
                    })
                }
            }
        },
        tna = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Fg.unbindAll(), b.Fg.set("panes", null), b.Fg.set("projection", null), b.Hg.sl(b), b.Gg && (b.Gg = !1, b.Fg.onRemove ? b.Fg.onRemove() : b.Fg.remove()))
            }
        },
        qna = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        vna = function(a,
            b) {
            a.Fg.get("projection") != b && (a.Fg.bindTo("panes", a.map.__gm), a.Fg.set("projection", b))
        };
    _.Ia(BD, _.Jk);
    BD.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.bj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Fg : null))
    };
    var DD = {};
    _.Ia(ona, _.Jk);
    DD.Xk = function(a) {
        if (a) {
            var b = a.getMap();
            (CD(a).xB || null) !== b && (b && pna(a, b), CD(a).xB = b)
        }
    };
    DD.sl = function(a) {
        const b = CD(a);
        var c = b.li;
        c && c.unbindAll();
        (c = b.PB) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Rh && _.Pb(b.Rh, _.uk);
        b.Rh = null;
        b.Ev && (b.Ev.Eh.Ej(), b.Ev = null);
        delete CD(a).xB
    };
    var ED = {},
        rna = class {
            constructor(a, b, c) {
                this.map = a;
                this.Fg = b;
                this.Hg = c;
                this.Gg = !1;
                _.zl(this.map, "Ox");
                _.xl(this.map, 148440);
                c.Xk(this)
            }
            draw() {
                this.Gg || (this.Gg = !0, this.Fg.onAdd && this.Fg.onAdd());
                this.Fg.draw && this.Fg.draw()
            }
        },
        sna = class {
            constructor(a, b) {
                this.Jg = a;
                this.Hg = b;
                this.Fg = null;
                this.Gg = []
            }
            dispose() {}
            Ui(a, b, c, d, e, f, g, h) {
                const l = this.Fg = this.Fg || new _.mB(this.Jg, this.Hg, () => {});
                l.Ui(a, b, c, d, e, f, g, h);
                for (const n of this.Gg) vna(n, l), n.draw()
            }
            Xk(a) {
                this.Gg.push(a);
                this.Fg && vna(a, this.Fg);
                this.Hg.refresh()
            }
            sl(a) {
                _.Ub(this.Gg,
                    a)
            }
        };
    ED.Xk = una;
    ED.sl = tna;
    _.kk("overlay", {
        Qz: function(a) {
            if (a) {
                (0, DD.sl)(a);
                (0, ED.sl)(a);
                var b = a.getMap();
                b && (b instanceof _.Pk ? (0, ED.Xk)(a) : (0, DD.Xk)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.hw(a, {
                Pk: ({
                    event: b
                }) => {
                    _.Pt(b.Kh)
                },
                Zj: b => _.Rv(b),
                Lp: b => _.Sv(b),
                Qk: b => _.Sv(b),
                lk: b => _.Tv(b)
            }).nr(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.qk);
            a.addEventListener("contextmenu", _.qk);
            a.addEventListener("dblclick", _.qk);
            a.addEventListener("mousedown", _.qk);
            a.addEventListener("mousemove", _.qk);
            a.addEventListener("MSPointerDown",
                _.qk);
            a.addEventListener("pointerdown", _.qk);
            a.addEventListener("touchstart", _.qk);
            a.addEventListener("wheel", _.qk)
        }
    });
});