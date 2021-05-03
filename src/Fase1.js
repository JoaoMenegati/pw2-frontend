import virus from './img/virus.png'
import nave from './img/alcohol.png'
import './css/bootstrap.min.css';
import './css/fase1.css';

function Fase1() {
  return (
    <div className="Fase1">
        <div class="linha1">
            <div id="covid1" class="linha1">
                <img class="mb-4" src={virus} alt="" width="72" height="72"/>
            </div>
            <div id="covid2" class="linha1">
                <img class="mb-4" src={virus} alt="" width="72" height="72"/>
            </div>
            <div id="covid3" class="linha1">
                <img class="mb-4" src={virus} alt="" width="72" height="72"/>
            </div>
            <div id="covid4" class="linha1">
                <img class="mb-4" src={virus} alt="" width="72" height="72"/>
            </div>
            <div id="covid5" class="linha1">
                <img class="mb-4" src={virus} alt="" width="72" height="72"/>
            </div>
            <div id="covid6" class="linha1">
                <img class="mb-4" src={virus} alt="" width="72" height="72"/>
            </div>
        </div>
        <hr class="mb-4"/>
        <div class="linha_nave">
            <img class="mb-4" src={nave} alt="" width="72" height="72"/>
        </div>
    </div>
  );
}

export default Fase1;
