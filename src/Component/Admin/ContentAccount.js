import { DataTable, SelectCourse } from "../../Commom"
export const ContentAccount = () => {
    return (

        <div class="content-page" style={{ marginTop: '0px', padding: '0px' }}>
            <div class="content " style={{ marginTop: '80px' }}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card-box pt-0 bx">
                                <ul class="nav nav-tabs tabs-bordered " >
                                    <li class="nav-item">
                                        <a href="#home" data-toggle="tab" aria-expanded="false" class="nav-link active" >
                                            <span class="d-block d-sm-none"><i class="mdi mdi-home-variant-outline font-18"></i></span>
                                            <span class="d-none d-sm-block">Danh sách học viên</span>
                                        </a>
                                    </li>


                                </ul>
                                <div class="tab-content pt-3">
                                    <div class="tab-pane show active" id="home">
                                        <div className="card">
                                        <div className="card-header p-0 pl-2  bg-i ">
                                            <div class="row">
                                                <div class="col-sm-12 col-md-6 d-flex align-items-center" >
                                                    <div class="d-flex align-items-center pt-1  " >
                                                        <h3 className="color-white card-title font-weight-bold align-middle mb-0">DANH SÁCH HỌC VIÊN</h3>
                                                    </div>
                                                </div>

                                                <div class="col-sm-12 col-md-6 margin-top-5s pt-1 pb-1">
                                                    <button type="button" class="btn btn-sm bg-c pull-right margin-left-5 mr-4" >
                                                        <i class="fa fa-download pr-2"></i>
                                                        Xuất Excel
                                                    </button>
                                                    <button type="button" class="btn btn-sm btn-danger pull-right mr-2"  >
                                                        <i class="fa fa-eye pr-2"></i>
                                                        Xem
                                                    </button>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="card-body w-50 m-auto">
                                                <div class="form-group">
                                                    <label class="label mb-0">Khóa học</label>
                                                    <div class="input-group">
                                                        <SelectCourse
                                                            // onSelected={e => setCourseSearch(e.value)}
                                                            // items={CourseSearch}
                                                            font="font-16"
                                                            title="Chọn tất cả">
                                                        </SelectCourse>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive font-16" style={{ color: '#555', zIndex: '0' }}>
                                                {/* <DataTable
                                                    data={data}
                                                    columns={columns}
                                                /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane " id="profile">
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}