
function changeSelectedInput() {
    let selected = $("#publisher_check").is(":checked");
    console.log(selected);
    $("#kiado").prop("disabled", !selected);
    $("#uj_kiado").prop("disabled", selected);
}


let ids = ["cover_error", "isbn_error", "title_error", "writers_error", "genre_error", "publisher_error", "price_error", "release_error", "description_error", "piece_error"];

ids.forEach(e => {
    $("#" + e).html("");
    $("#" + e).css("visibility", "hidden");
});


$("form").submit(function(e) {
    e.preventDefault();

    ids.forEach(e => {
        $("#" + e).html("");
        $("#" + e).css("visibility", "hidden");
    });


    let cim = $("#cim").val();
    let szerzo = $("#szerzo").val();
    let isbn = $("#isbn").val();
    let kiado = $("#kiado").val();
    let ar = $("#ar").val();
    let kiadas = $("#kiadas").val();
    let leiras = $("#leiras").val();
    let borito = $("#formFileSm")[0].files[0];
    let uj_mufaj = $("#uj_mufaj").val();
    let darab = $("#darab").val();

    //console.log(cim, szerzo, isbn, mufaj, kiado, ar, kiadas, leiras);

    let kijeloltMufajok = $("input[name='mufajok']:checked").map(function() {
        return $(this).val();
    }).get();   

    let cimRes = checkTitle(cim);
    let szerzoRes = checkWriters(szerzo);
    let isbnRes = checkISBN(isbn);
    let mufajRes = checkGenre(kijeloltMufajok, uj_mufaj);
    let kiadoRes = checkPublisher(kiado);
    let arRes = checkPrice(ar);
    let kiadasRes = checkReleaseDate(kiadas);
    let leirasRes = checkDescription(leiras);
    let darabRes = checkPiece(darab);
    let boritoRes = checkCover(borito);

    let selected = $("#publisher_check").is(":checked");
    
    
    //console.log(cimRes, szerzoRes, isbnRes, mufajRes, kiadasRes, arRes, kiadasRes, leirasRes);

    if (cimRes && szerzoRes && isbnRes && kiadasRes && (kiadoRes && selected) && arRes && leirasRes && mufajRes && darabRes && boritoRes) {
        const formData = new FormData();
        formData.append("title", cim);
        formData.append("writer", szerzo);
        formData.append("isbn", isbn);
        formData.append("publisher", kiado);
        formData.append("price", ar);
        formData.append("release", kiadas);
        formData.append("description", leiras);
        formData.append("cover", borito);
        formData.append("selected", selected ? 1 : 0);
        formData.append("piece", darab);

        
        if (selected) {
            let publisher_id = $("#kiado").val();
            formData.append("publisher_id", publisher_id);
            
        } else {
            let new_publisher = $("#uj_kiado").val();
            formData.append("new_publisher", new_publisher);
        }

        if (kijeloltMufajok.length !== 0) {
            formData.append("current_genres", kijeloltMufajok);
        } else {
            formData.append("current_genre", "");
        }
        
        formData.append("new_genres", uj_mufaj);

        $.ajax({
            url: "/addbook",
            type: "post",
            data: formData,
            contentType: false,
            processData: false,
            success: (data) => {
                if (data.success === 1) {
                    //console.log(data.msg);
                    $("#modal-title").html("Siker");
                    $("#modal-text").html("Sikeres könyvbeszúrás!");
                    $("#modal").modal("show");
                } else if (data.success === 2) {
                    let err = data.errors;

                    err.forEach(e => {
                        $("#" + e.id).html(e.msg);
                        $("#" + e.id).css("visibility", "visible");
                    });

                } else {
                    $("#modal-title").html("Hiba");
                    $("#modal-text").html("Sikertelen könyvbeszúrás!");
                    $("#modal").modal("show");
                }
            },
            error: (xhr, error) => {
                console.log(error, xhr);
            }
        });

    } else {
        errors.forEach(e => {
            $("#" + e.id).html(e.msg);
            $("#" + e.id).css("visibility", "visible");
        });
    }

});
