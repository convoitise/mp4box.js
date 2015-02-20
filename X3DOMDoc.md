Log of X3DOMsupport
======

#####TODO:
* Add timing when adding XML content to DOM
* Introduce remove <x3d> from DOM
* Handle multiple XML files

#####CHECK:
* parseFromString function ( https://dvcs.w3.org/hg/innerhtml/raw-file/tip/index.html#namespaces )

#####Roadmap:
* Check X3D scene add
* Customize MovieTexture

#####Known issues:


Currently testing:

```XML
			<x3d width='854px' height='480px'>
				<scene>
					<shape><appearance><MovieTexture url='"./files/bunny480p.mp4"'></MovieTexture> </appearance><box></box></shape>
				</scene>
			</x3d>
```