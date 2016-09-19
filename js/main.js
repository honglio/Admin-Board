$(function() {
    // Make pagination demo work
    $(".pagination a").on('click', function() {
        $(this).parent().siblings("li").removeClass("active").end().addClass("active");
    });

    // Select All
    $('#selectAll').on('click', function(event) {
        $('input[type=checkbox]').prop('checked', event.target.checked);
    })

    // if click on any selected checkbox, uncheck 'Select All' selector
    $('table input[type="checkbox"]').on('click', function(event) {
        if (!event.target.checked) {
            $('#selectAll').prop('checked', false);
        }
    })

    // Delete clicked line
    $('table button').on('click', function(event) {
        $(event.target.parentElement).parent().remove();
    })

    // Delete selected line
    $('#DeleteSelected').on('click', function(event) {
        $('table input[type="checkbox"]').each(function(i, el) {
            if (el.checked) {
                $(el.parentElement).parent().parent().remove();
            }
        })
    })

    // Search function
    $('form[role="search"] input').on('keyup', function(event) {
        var text = $(event.target).val();

        $('tbody > tr').each(function(i, el) {
            $(el).hide();
            $(el).find('td').each(function(j, item) {
                if ($(item).text().indexOf(text) !== -1) {
                    $(el).show();
                }
            })
        })
    })
});
