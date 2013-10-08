Put the assets that you want to use as assets within a spritesheet here inside a subfolder.

Then import them in your style.scss:
```css
@import "spritesheets/var/*.png";
$var-sprite-dimensions: true;
```

To use the stylesheet you could use:
```css
.myClass {
	@include var-sprite( my-asset-name-without-extension );
}
```