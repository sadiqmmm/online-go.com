/*
 * Copyright (C) 2012-2017  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as React from "react";
import data from "data";
import {_, pgettext, interpolate} from "translate";

interface DeveloperProperties {
}

export class Developer extends React.PureComponent<DeveloperProperties, any> {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
        <div className="Developer container">
            <h1>{_("View the docs")}</h1>
            <div className="row">
                <div className="col-md-4">
                    <a target="_blank" href="http://docs.ogs.apiary.io/">
                        <img src={data.get("config.cdn_release") + "/img/apiary-on-white.png"} className="top-image"/>
                    </a>
                </div>
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <a target="_blank" href="http://ogs.readme.io/" style={{paddingTop: "20px", display: "inline-block"}}>
                        <span style={{fontSize: "60px", fontFamily: '"Courier New", Courier, monospace'}}><b>read</b>me.io</span>
                    </a>
                </div>
            </div>
            <h1>{_("View the API")}</h1>
            <div className="row">
                <div className="col-md-4">
                  <a href="/api/" target="_self">
                      <img src={data.get("config.cdn_release") + "/img/drf-logo.png"} className="top-image"/>
                  </a>
                </div>
            </div>
            <h1>{_("Application management")}</h1>
            <a href="/oauth2/applications/">OAuth2 Application Manager</a>
        </div>
        );
    }
}
