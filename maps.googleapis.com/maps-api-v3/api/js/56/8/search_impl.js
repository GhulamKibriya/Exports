google.maps.__gjsload__('search_impl', function(_) {
    var Mkb = function(a, b) {
            _.H(a.Ig, 3, b)
        },
        Qkb = function(a, b, c) {
            const d = _.jL(new Nkb);
            c.Dq = (0, _.Ca)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.hNa(c, _.zR(b));
            const e = [];
            e.push(_.sk(c, "click", (0, _.Ca)(Okb, null, a)));
            _.Pb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.sk(c, f, (0, _.Ca)(Pkb, null, a, f)))
            });
            e.push(_.sk(a, "clickable_changed", function() {
                a.Fg.clickable = 0 != a.get("clickable")
            }));
            a.Gg = e
        },
        Okb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Y(e.Ig,
                    2) ? new _.Gj(_.Fu(_.J(e.Ig, 2, _.Lu).Ig, 1), _.Fu(_.J(e.Ig, 2, _.Lu).Ig, 2)) : null;
                f.fields = {};
                const g = _.ri(e.Ig, 3);
                for (let h = 0; h < g; ++h) {
                    const l = _.fs(e.Ig, 3, _.IR, h);
                    f.fields[l.getKey()] = l.getValue()
                }
            }
            _.Fk(a, "click", b, c, d, f)
        },
        Pkb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.Fk(a, b, c, d, e, h, g)
        },
        Rkb = function() {},
        Skb = class extends _.R {
            constructor() {
                super()
            }
            bj() {
                return _.Pi(this.Ig, 2)
            }
        },
        Tkb = [_.K, , , _.bq, _.pOa];
    var Ukb = class extends _.R {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.I(this.Ig, 1, -1)
        }
    };
    var Nkb = class {
        constructor() {
            var a = _.Ro,
                b = _.Oo;
            this.Gg = _.Ri;
            this.Fg = _.Zr(_.Sz, a, _.eB + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new Ukb(g);
                b(g)
            }
            var d = new Skb;
            _.H(d.Ig, 1, a.layerId.split("|")[0]);
            _.H(d.Ig, 2, a.featureId);
            Mkb(d, this.Gg.Fg().Fg());
            for (var e in a.parameters) {
                var f = _.Li(d.Ig, 4, _.IR);
                _.H(f.Ig, 1, e);
                _.H(f.Ig, 2, a.parameters[e])
            }
            a = _.yi(d.Ai(), Tkb, 1);
            this.Fg(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    Rkb.prototype.HD = function(a) {
        if (_.pn[15]) {
            var b = a.Jg;
            const c = a.Jg = a.getMap();
            b && a.Fg && (a.Hg ? (b = b.__gm.Wj, b.set(b.get().un(a.Fg))) : a.Fg && _.ENa(a.Fg, b) && (_.Pb(a.Gg || [], _.uk), a.Gg = null));
            if (c) {
                b = new _.Iy;
                const d = a.get("layerId").split("|");
                b.layerId = d[0];
                for (let e = 1; e < d.length; ++e) {
                    const [f, ...g] = d[e].split(":");
                    b.parameters[f] = g.join(":")
                }
                a.get("spotlightDescription") && (b.spotlightDescription = new _.gz(a.get("spotlightDescription")));
                a.get("paintExperimentIds") && (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                a.get("styler") && (b.styler = new _.Wy(a.get("styler")));
                a.get("roadmapStyler") && (b.roadmapStyler = new _.Wy(a.get("roadmapStyler")));
                a.get("travelMapRequest") && (b.travelMapRequest = new _.ria(a.get("travelMapRequest")));
                a.get("mapsApiLayer") && (b.mapsApiLayer = new _.Oy(a.get("mapsApiLayer")));
                a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                a.get("searchPipeMetadata") && (b.searchPipeMetadata = new _.QA(a.get("searchPipeMetadata")));
                a.get("overlayLayer") && (b.overlayLayer = new _.hz(a.get("overlayLayer")));
                a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.Xha(a.get("airQualityPipeMetadata")));
                a.get("directionsPipeParameters") && (b.directionsPipeParameters = new _.Vha(a.get("directionsPipeParameters")));
                a.get("clientSignalPipeMetadata") &&
                    (b.clientSignalPipeMetadata = new _.sga(a.get("clientSignalPipeMetadata")));
                b.darkLaunch = !!a.get("darkLaunch");
                a.Fg = b;
                a.Hg = a.get("renderOnBaseMap");
                a.Hg ? (a = c.__gm.Wj, a.set(a.get().Cl(b))) : Qkb(a, c, b);
                _.zl(c, "Lg");
                _.xl(c, 148282)
            }
        }
    };
    _.kk("search_impl", new Rkb);
});