import { Component } from "react";

class Election extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mayor: 0,
      vice: 0,
      rep: 0,
    };
  }

 updateVote = (event) => {
    event.preventDefault();
    let m = event.target.mayor.checked;
    let v = event.target.vice.checked;
    let r = event.target.rep.checked;
    this.setState({ mayor: m }) => {
      return {
        mayor: this.state.mayor + 1
      }
    };
    this.setState({ vice: v }) => {
      return {
        mayor: this.state.mayor + 1
      }
    };
    this.setState({ rep: r })
    => {
      return {
        mayor: this.state.mayor + 1
      }
    };;
  };

  render() {
    return (
      <>
        <h1>Voting Form</h1>
        <form onSubmit={this.solveArea}>
          <label>Mayor: </label>
          <br />
          <input type="radio" name="mayor" value="dina-pili" />
          Dina Pili
          <br />
          <input type="radio" name="mayor" value="lucky-chan" />
          Lucky Chan
          <br />
          <input type="radio" name="mayor" value="pama-hi-in" />
          Pama Hi-in
          <br />
          <label>Vice-president: </label>
          <br />
          <input type="radio" name="vice-president" value="pat-tumbakita" />
          Pat Tumbakita
          <br />
          <input type="radio" name="vice-president" value="ben-eko" />
          Ben Eko
          <br />
          <input type="radio" name="vice-president" value="crystal-maiden" />
          Crystal Maiden
          <br />
          <label>Representative: </label>
          <br />
          <input
            type="checkbox"
            value="1"
            name="juan-tutri"
            onclick="chkcontrol(0)"
          />
          Juan Tutri
          <br />
          <input
            type="checkbox"
            value="2"
            name="tom-mabakana"
            onclick="chkcontrol(1)"
          />
          Tom Mabakana
          <br />
          <input
            type="checkbox"
            value="3"
            name="cory-corykok"
            onclick="chkcontrol(2)"
          />
          Cory Corykok
          <br />
          <input
            type="checkbox"
            value="4"
            name="anne-nonanaman"
            onclick="chkcontrol(3)"
          />
          Anne Nonanaman
          <br />
          <input
            type="checkbox"
            value="5"
            name="pete-chapay"
            onclick="chkcontrol(4)"
          />
          Pete Chapay
          <br />
          <input type="submit" class="btn btn-primary" />
          <br />
        </form>
        <div>
          <h2>Vote Record</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Name {this.state.mayor}</th>
                <th>Position {this.state.vice}</th>
                <th>Total Votes {this.state.rep}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <script type="text/javascript">
            checkboxlimit(document.forms.voting.representative, 3);
          </script>
        </div>
      </>
    );
  }
}

export default Election;
