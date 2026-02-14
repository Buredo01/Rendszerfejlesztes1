const BookDAO = require("../../dao/BookDAO");

//Controller for the index site
class IndexSiteController {

    //When a GET req came from '/' route this function will be called
    static getSite(req, res) {
        //return the site with message
        res.render("index");
    }

    static async kereses(req, res) {
        const {searchId} = req.query;
        //console.log(searchId);
        if (searchId == "") {
            console.log("Nincs adat!");
        } else{
            // KosarDAO keresése jön ide
            const sikeresKereses = await BookDAO.searchByName(searchId);
            if(sikeresKereses.success){
                //console.log("Sikeres kereses!");
                //Rendereles az oldalhoz!
                return res.render("searchResults.ejs", {konyvek : sikeresKereses.konyvek});
            } else{
                console.log("Sikertelen kereses!");
            }
        }
    }

    static async szures(req, res) {
        const {searchFilter, searchCrit} = req.query;
        //console.log(searchFilter);
        //console.log(searchCrit);
        if (searchFilter == "") {
            console.log("Nincs adat!");
        } else{
            let sikeresKereses;
            if(searchCrit == "searchByName") {
                sikeresKereses = await BookDAO.searchByName(searchFilter);
            } else if (searchCrit == "searchByAuthor") {
                sikeresKereses = await BookDAO.searchByAuthor(searchFilter);
            } else if (searchCrit == "searchByGenre") {
                sikeresKereses = await BookDAO.searchByGenre(searchFilter);
            } else if (searchCrit == "searchByPublisher") {
                sikeresKereses = await BookDAO.searchByPublisher(searchFilter);
            } else if (searchCrit == "searchByDate"){
                sikeresKereses = await BookDAO.searchByDate(searchFilter);
            }
            if(sikeresKereses.success){
                console.log("Sikeres szures!");
                return res.render("searchResults.ejs", {konyvek : sikeresKereses.konyvek});
            } else{
                console.log("Sikertelen kereses!");
            }
        }
    }
}


module.exports = IndexSiteController;