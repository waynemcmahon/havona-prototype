import { Helmet } from "react-helmet";

/* const beeJs = (
    <ScriptTag type="text/javascript" src="../plugins/bee3dSlider/src/scripts/bee3D.js" />
    )
const classie = (
    <ScriptTag type="text/javascript" src="../plugins/bee3dSlider/src/scripts/_lib/classie.js"/>
) */
export const BeeSlider = () => {
    /* var demo = document.getElementById('demo');

    var slider = new Bee3D(demo, {
      effect: 'concave',
      // ... more options here
    }); */

return(
    <div>
        <Helmet>
            <script type="text/jsx" src="../plugins/bee3dSlider/src/scripts/bee3D.js"></script>
            <script type="text/jsx" src="../plugins/bee3dSlider/src/scripts/_lib/classie.js"></script>
        </Helmet>

        <div id="demo" className="bee3D--parent">
            <section className="bee3D--slide">Slide 1</section>
            <section className="bee3D--slide">Slide 2</section>
            <section className="bee3D--slide">Slide 3</section>
        </div>
    </div>
        
    )
}
