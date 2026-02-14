let ids = ["cover_error", "isbn_error", "title_error", "writers_error", "genre_error", "publisher_error", "price_error", "release_error", "description_error", "piece_error"];

ids.forEach(e => {
    $("#" + e).html("");
    $("#" + e).css("visibility", "hidden");
});

$("form").submit(function(e) {
    e.preventDefault();


    let cim = $("#cim").val();
    let szerzo = $("#szerzo").val();
    let isbn = $("#isbn").val();
    //let kiado = $("#kiado").val();
    let ar = $("#ar").val();
    let kiadas = $("#kiadas").val();
    let leiras = $("#leiras").val();
    let borito = $("#formFileSm")[0].files[0];
    let old_isbn = $("#old_isbn").val();
    let darab = $("#piece").val();

    let cimRes = checkTitle(cim);
    let szerzoRes = checkWriters(szerzo);
    let arRes = checkPrice(ar);
    let isbnRes = checkISBN(isbn);
    let kiadasRes = checkReleaseDate(kiadas);
    let leirasRes = checkDescription(leiras);
    let boritoRes = checkCover(borito);
    //let darabRes = checkPiece(darab);

    if (cimRes && szerzoRes && arRes && isbnRes && kiadasRes && leirasRes && boritoRes) {
        let formData = new FormData();
        formData.append("title", cim);
        formData.append("writer", szerzo);
        formData.append("price", ar);
        formData.append("isbn", isbn);
        formData.append("release_date", kiadas);
        formData.append("description", leiras);
        formData.append("cover", borito);
        formData.append("old_isbn", old_isbn);
        formData.append("piece", darab);

        $.ajax({
            url: "/updateBook",
            type: "post",
            data: formData,
            contentType: false,
            processData: false,
            success: (res) => {
                if (res.success) {
                    $("#modal-title").html("Siker");
                    $("#modal-text").html("Sikeres könyv frissítés!");
                    $("#btn").html("Könyv megtekintése");
                    $("#modal").modal("show");

                    $("#btn").click(() => {
                        window.location.href = window.location.origin + `/konyv?id=${isbn}`;
                    });

                } else if (res.success == 2) {
                    let err = data.errors;

                    err.forEach(e => {
                        $("#" + e.id).html(e.msg);
                        $("#" + e.id).css("visibility", "visible");
                    });
                    
                } else {
                    $("#modal-title").html("Hiba");
                    $("#modal-text").html("Hiba történt a könyvfrissítése során!");
                    $("#modal").modal("show");
                }
            },
            error: (xhr, error) => {
                console.log(error, xhr);
            }
        });

    }
});