class SiteController {
    // [GET]
    index(req, res) {
        res.render('news');
    }
    //[GET] /news/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
