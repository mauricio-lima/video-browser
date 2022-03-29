(function (global) {

    function DOMLoaded()
    {
        alert('DOM Content loaded')
    }

    document.addEventListener('DOMContentLoaded', DOMLoaded)
})(window)
