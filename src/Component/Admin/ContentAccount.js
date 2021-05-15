
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
                                            <span class="d-none d-sm-block">Thêm tài khoản mới</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#profile" data-toggle="tab" aria-expanded="true" class="nav-link ">
                                            <span class="d-block d-sm-none"><i class="mdi mdi-account-outline font-18"></i></span>
                                            <span class="d-none d-sm-block">Danh sách học viên</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#messages" data-toggle="tab" aria-expanded="false" class="nav-link">
                                            <span class="d-block d-sm-none"><i class="mdi mdi-email-outline font-18"></i></span>
                                            <span class="d-none d-sm-block">Messages</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#settings" data-toggle="tab" aria-expanded="false" class="nav-link">
                                            <span class="d-block d-sm-none"><i class="mdi mdi-settings-outline font-18"></i></span>
                                            <span class="d-none d-sm-block">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content pt-3">
                                    <div class="tab-pane show active" id="home">
                                        <div className="card">
                                            <div className="card-header p-0 pl-3 bg-info ">
                                                <h4 className="color-white">
                                                    Tạo tài khoản cho học viên
                                                    </h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div class="col-sm-12 col-md-4">
                                                        <div class="form-group">
                                                            <label class="label mb-0">Tên đăng nhập</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control back-ground" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-4">
                                                        <div class="form-group">
                                                            <label class="label mb-0">Mật khẩu</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control back-ground" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-4">
                                                        <div class="form-group">
                                                            <label class="label mb-0">Số điện thoại</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control back-ground" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 d-flex justify-content-center mt-4">
                                                        <button className="btn btn-danger waves-effect width-md waves-light mr-3 ">
                                                            Lưu
                                                        </button>
                                                        <button className="btn btn-secondary waves-effect width-md ">
                                                            Hủy
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane " id="profile">
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    </div>
                                    <div class="tab-pane" id="messages">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                        <p class="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                    </div>
                                    <div class="tab-pane" id="settings">
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