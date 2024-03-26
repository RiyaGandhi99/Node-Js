
$("#add_user_form").submit(() => {
    alert("User has been successfully added!");
});

$("#update_user_form").submit((event) => {

    event.preventDefault();
    //console.log($("#update_user_form").serializeArray());
    var updated_data = $("#update_user_form").serializeArray();
    var data = {};

    $.map(updated_data, (n, i) => {
        data[n["name"]] = n["value"];
    });
    console.log(data);

    var request = {
        "url": `http://localhost:3005/api/user/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done((response) => {
        alert("User has been successfully updated!");
    })
        .fail(err => {
            console.log(err);
        });

});


if (window.location.pathname == "/") {

    var ondelete = $("table tbody td a.delete");
    ondelete.click(function (){
        console.log($(this));
        var id = $(this).attr("data-id");
        console.log(id);
        if (confirm("Would you want to delete this user")) {

            var request = {
                "url": `http://localhost:3005/api/user/${id}`,
                "method": "DELETE"
            }

            $.ajax(request)
            .done((response) => {
                alert("User has been successfully deleted!");
                location.reload();
            })
            .fail(err => {
                console.log(err);
            });
        } 
    });

}

