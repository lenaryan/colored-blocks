<template>
    <nav class="nav header__nav">
        <ul class="menu-top">
            <li class="menu-top__item">
                <a href="#" class="menu-top__link">About</a>
            </li>
            <li class="menu-top__item">
                <a href="#" class="menu-top__link menu-top__link--sub">Help
                    <picture>
                        <source srcset="@/images/arrow-small-down.svg">
                        <img src="@/images/arrow-small-down.png" alt="Submenu" class="menu-top__submenu-icon">
                    </picture>
                    <picture>
                        <source srcset="@/images/arrow-small-up.svg">
                        <img src="@/images/arrow-small-up.png" alt="Submenu" class="menu-top__submenu-icon menu-top__submenu-icon--hidden">
                    </picture>
                </a>
                <ul class="submenu menu-top__submenu">
                    <li class="submenu__item">
                        <a href="#" class="submenu__link">User Guide</a>
                    </li>
                    <li class="submenu__item">
                        <a href="#" class="submenu__link">Contact Support</a>
                    </li>
                </ul>
            </li>
            <li class="menu-top__item">
                <a href="#" class="menu-top__link">Features</a>
            </li>
        </ul>
    </nav>
</template>