
$("#confirmDeleteBtn").click(function() {
    $.ajax({
        url: "/konyvtorlese",
        type: "post",
        data: {
            isbn: $("#isbn").val()
        },
        success: (res) => {
            $("#modal-title").html("Hiba");
            $("#modal-text").html("Sikertelen könyv törlés!");
            $("#modal").modal("show");
        },
        error: (xhr, error) => {
            console.log(error, xhr);
        }
    });
});


$("#deleteForm").submit(function(e) {
    e.preventDefault();
    $("#deleteModal").modal("show");
});