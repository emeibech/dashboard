const stars = document.querySelectorAll('.star');
const shares = document.querySelectorAll('.share');
const visibilities = document.querySelectorAll('.visibility');

//hover effect for stars in interaction section
stars.forEach(star => {
    star.addEventListener('touchstart', starHoverColor);
});

stars.forEach(star => {
    star.addEventListener('touchend', starDefaultColor);
});

stars.forEach(star => {
    star.addEventListener('mouseover', starHoverColor);
});

stars.forEach(star => {
    star.addEventListener('mouseout', starDefaultColor);
});

function starDefaultColor(e) {
    e.target.src="./svg/star.svg";
}

function starHoverColor(e) {
    e.target.src="./svg/star-hover.svg";
}

//hover effect for shares in interaction section
shares.forEach(share => {
    share.addEventListener('touchstart', shareHoverColor);
});

shares.forEach(share => {
    share.addEventListener('touchend', shareDefaultColor);
});

shares.forEach(share => {
    share.addEventListener('mouseover', shareHoverColor);
});

shares.forEach(share => {
    share.addEventListener('mouseout', shareDefaultColor);
});

function shareDefaultColor(e) {
    e.target.src="./svg/share.svg";
}

function shareHoverColor(e) {
    e.target.src="./svg/share-hover.svg";
}

//hover effect for visibilities in interaction section
visibilities.forEach(visibility => {
    visibility.addEventListener('touchstart', visibilityHoverColor);
});

visibilities.forEach(visibility => {
    visibility.addEventListener('touchend', visibilityDefaultColor);
});

visibilities.forEach(visibility => {
    visibility.addEventListener('mouseover', visibilityHoverColor);
});

visibilities.forEach(visibility => {
    visibility.addEventListener('mouseout', visibilityDefaultColor);
});

function visibilityDefaultColor(e) {
    e.target.src="./svg/visibility.svg";
}

function visibilityHoverColor(e) {
    e.target.src="./svg/visibility-hover.svg";
}