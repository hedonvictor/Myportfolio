import React from "react";
import { Card } from "react-bootstrap";

export default function Formation() {
    return (
        <section className="d-flex justify-content-around mt-5">
            <Card id="card-formacao" className="border-0 shadow-lg">
                <h3 class="card-text fw-normal">
                    Bacharelado

                </h3>
                <h4 class="card-text fw-normal">
                    Engenharia de software
                </h4>
                <small>
                    • Centro Universitário das Faculdades Integradas de Ourinhos – Unifio
                </small>
                <p>
                    • 2022 - 2025
                </p>
            </Card>
            <Card id="card-formacao" className="border-0 shadow-lg">
                <h3 class="card-text fw-normal">
                    Desenvolvimento web - FULL STACK
                </h3>
                <h4 class="card-text fw-normal">
                    HTML, CSS e JavaScript
                </h4>
                <small>
                    • Curso online programador BR
                </small>
                <p>
                    • 26Hrs
                </p>
            </Card>
            <Card id="card-formacao" className="border-0 shadow-lg">
                <h3 class="card-text fw-normal">
                Desenvolvimento web - FULL STACK

                </h3>
                <h4 class="card-text fw-normal">
                    Firebase, Bootstrap e JQuery
                </h4>
                <small>
                • Curso online programador BR
                </small>
                <p>
                    • 9hrs
                </p>
            </Card>
        </section>
    )
}