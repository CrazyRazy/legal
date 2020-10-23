$(document).ready(function () {
    $(".datatable").DataTable({
        lengthMenu: [5, 10, 25, 50],
        pageLength: 5,
        columns: [{orderable: !1}, {orderable: !0}, {orderable: !0}, {orderable: !0}, {orderable: !0}, {orderable: !0}, {orderable: !1}],
        order: [[1, "asc"]],
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    })
});