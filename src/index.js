document.addEventListener( "DOMContentLoaded", () =>
{
    const tabButtons = document.querySelectorAll( ".tab-btn" );
    const tabPanes = document.querySelectorAll( ".tab-pane" );

    tabButtons.forEach( ( button ) =>
    {
        button.addEventListener( "click", () =>
        {
            tabButtons.forEach( ( btn ) => btn.classList.remove( "active-tab", "text-blue-500", "border-blue-500" ) );
            tabButtons.forEach( ( btn ) => btn.classList.add( "border-transparent", "text-gray-600" ) );
            tabPanes.forEach( ( pane ) => pane.classList.add( "hidden" ) );

            button.classList.remove( "border-transparent", "text-gray-600" );
            button.classList.add( "active-tab", "text-blue-500", "border-blue-500" );

            const targetPane = document.getElementById( button.getAttribute( "data-target" ) );
            targetPane.classList.remove( "hidden" );
        } );
    } );

    const menuToggle = document.getElementById( 'menu-toggle' );
    const mobileMenu = document.getElementById( 'mobile-menu' );

    menuToggle.addEventListener( 'click', () =>
    {
        mobileMenu.classList.toggle( 'hidden' );
    } );

    const slider = document.getElementById( 'slider' );
    const slides = slider.children;
    const prev = document.getElementById( 'prev' );
    const next = document.getElementById( 'next' );
    let index = 0;

    const updateSlider = () =>
    {
        slider.style.transform = `translateX(-${ index * 100 }%)`;
    };

    next.addEventListener( 'click', () =>
    {
        index = ( index + 1 ) % slides.length;
        updateSlider();
    } );

    prev.addEventListener( 'click', () =>
    {
        index = ( index - 1 + slides.length ) % slides.length;
        updateSlider();
    } );
} );


