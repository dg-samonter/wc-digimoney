import {
  Component,
  ComponentInterface,
  Event,
  h,
  State,
  Prop,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "table-digimoney",
  styleUrl: "table-digimoney.css",
  shadow: true,
})
export class TableDigimoney implements ComponentInterface {
  //@Prop() data: any

  @Prop() datarecords: any[] = [
    {
      id: "1",
      estado: "Aprobado",
      employee_name: "Tiger Nixon",
      employee_salary: "320800",
      employee_age: "61",
      profile_image: "",
    },
    {
      id: "2",
      estado: "Pendiente",
      employee_name: "Garrett Winters",
      employee_salary: "170750",
      employee_age: "63",
      profile_image: "",
    },
    {
      id: "2",
      estado: "Devuelto",
      employee_name: "Garrett Winters",
      employee_salary: "170750",
      employee_age: "63",
      profile_image: "",
    },
  ];
  @State() datacolumns: string[];
  @Event() public clickRow: EventEmitter;
  public event(e: any) {
    this.clickRow.emit(e);
  }
  private extractColumnNames() {
    // this.datarecords = variable;
    const firstrecord = Object.keys(this.datarecords[0]);
    this.datacolumns = firstrecord;
  }

  componentWillLoad() {
    // console.log(this.data)

    return this.extractColumnNames();
  }

  private displayRecords(key: number) {
    const datacolumns = this.datacolumns;
    return datacolumns.map((each_col) => this.displayRecordName(each_col, key));
  }
  private displayRecordName(colname: string, key: number) {
    if (colname != "id") {
      const record = this.datarecords[key];
      return (
        <td>
          {" "}
          <pichincha-typography variant="bodyText" color="darkGrey">
            {record[colname]}
          </pichincha-typography>
        </td>
      );
    } else {
      const record = this.datarecords[key];
      if (record["estado"] == "Aprobado") {
        return (
          <td>
            {" "}
            <div class="aprobed"></div>
          </td>
        );
      }
      if (record["estado"] == "Pendiente") {
        return (
          <td>
            <div class="stend"></div>
          </td>
        );
      }
      if (record["estado"] == "Devuelto") {
        return (
          <td>
            <div class="negate"></div>
          </td>
        );
      }
    }
  }

  private Capitalize(str: string) {
    const str_t = str.toUpperCase();
    const str_tt = str_t.replace("_", " ");
    return str_tt;
  }

  render() {
    const datarecords = this.datarecords;
    const table_headers = this.datacolumns;

    return (
      <div>
        {datarecords.length === 0 && (
          <div class="text-center">
            <pichincha-typography variant="h2" color="blue" align="center">
              {" "}
              No hay Informacion en este momento
            </pichincha-typography>
          </div>
        )}
        <div class="container">
          <div class="row">
            <table class="table table-bordered">
              <thead class="thead-light">
                <tr>
                  <th scope="col"></th>
                  {table_headers &&
                    table_headers.map(
                      (each_table_header) =>
                        each_table_header != "id" && (
                          <th scope="col">
                            {" "}
                            <pichincha-typography
                              variant="subtitle"
                              color="blue"
                              weight="bold"
                            >
                              {" "}
                              {this.Capitalize(each_table_header)}
                            </pichincha-typography>
                          </th>
                        )
                    )}
                </tr>
              </thead>
              <tbody>
                {datarecords &&
                  datarecords.map((each_datarecord: any, recordindex) => (
                    <tr
                      key={each_datarecord.id}
                      onClick={() => this.event(each_datarecord.id)}
                    >
                      {this.displayRecords(recordindex)}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
