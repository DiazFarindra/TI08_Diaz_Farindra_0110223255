<nav class="sidebar">
    <div class="sidebar-header">
        <a href="#" class="sidebar-brand">
            Puskesmas
        </a>
        <div class="sidebar-toggler not-active">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="sidebar-body">
        <ul class="nav">
            <li class="nav-item nav-category">Main</li>
            <li class="nav-item {{ active_class(['admin/dashboard']) }}">
                <a href="{{ route('admin.dashboard') }}" class="nav-link">
                    <i class="link-icon" data-feather="box"></i>
                    <span class="link-title">Dashboard</span>
                </a>
            </li>
            <li class="nav-item nav-category">Apps</li>
            <li class="nav-item {{ active_class(['admin/patients']) }}">
                <a href="{{ route('admin.patients.index') }}" class="nav-link">
                    <i class="link-icon" data-feather="plus-square"></i>
                    <span class="link-title">Pasien</span>
                </a>
            </li>
            <li class="nav-item {{ active_class(['admin/paramedics']) }}">
                <a href="{{ route('admin.paramedics.index') }}" class="nav-link">
                    <i class="link-icon" data-feather="clipboard"></i>
                    <span class="link-title">Paramedic</span>
                </a>
            </li>
            <li class="nav-item {{ active_class(['admin/checkups']) }}">
                <a href="{{ route('admin.checkups.index') }}" class="nav-link">
                    <i class="link-icon" data-feather="check-square"></i>
                    <span class="link-title">periksa</span>
                </a>
            </li>

            <li class="nav-item nav-category">Data</li>
            <li class="nav-item {{ active_class(['admin/kecamatan']) }}">
                <a href="{{ route('admin.kecamatan.index') }}" class="nav-link">
                    <i class="link-icon" data-feather="tablet"></i>
                    <span class="link-title">Kecamatan</span>
                </a>
            </li>
            <li class="nav-item {{ active_class(['admin/kelurahan']) }}">
                <a href="{{ route('admin.kelurahan.index') }}" class="nav-link">
                    <i class="link-icon" data-feather="tag"></i>
                    <span class="link-title">Kelurahan</span>
                </a>
            </li>
            <li class="nav-item {{ active_class(['admin/work-units']) }}">
                <a href="{{ route('admin.work-units.index') }}" class="nav-link">
                    <i class="link-icon" data-feather="triangle"></i>
                    <span class="link-title">Unit Kerja</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
