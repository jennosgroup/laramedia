<!-- Add New Media -->
<div id="laramedia-upload-button-container">
    <button type="button" id="laramedia-upload-files-button" class="btn btn-primary">Add New</button>
</div>

<!-- Actions -->
<div id="laramedia-actions-container">

    <!-- Actions Left Bar -->
    <div id="laramedia-actions-left-container">

        {{-- Active Bulk Option --}}
        @if (LaramediaConfig::showActiveBulkOptions() && LaramediaConfig::can('trash_bulk'))
            @include('laramedia::partials.active-bulk-options')
        @endif

        {{-- Trash Bulk Option --}}
        @if (LaramediaConfig::trashIsEnabled() && LaramediaConfig::showTrashBulkOptions() && (LaramediaConfig::can('restore_bulk') || LaramediaConfig::can('delete_bulk')))
            @include('laramedia::partials.trash-bulk-options')
        @endif

        <!-- Type -->
        @if (LaramediaConfig::showTypeFilter())
            @include('laramedia::partials.action-type')
        @endif

        <!-- Visibility -->
        @if (LaramediaConfig::showVisibility() && LaramediaConfig::showVisibilityFilter())
            @include('laramedia::partials.action-visibility')
        @endif

        <!-- Ownership -->
        @if (LaramediaConfig::showOwnershipFilter())
            @include('laramedia::partials.action-ownership')
        @endif
    </div>

    <!-- Action Right Bar -->
    <div id="laramedia-actions-right-container">

        <!-- Active Section Icon -->
        @if (LaramediaConfig::trashIsEnabled() && LaramediaConfig::showActiveIcon())
            @include('laramedia::partials.icon-active')
        @endif

        <!-- Trash Section Icon -->
        @if (LaramediaConfig::trashIsEnabled() && LaramediaConfig::showTrashIcon())
            @include('laramedia::partials.icon-trash')
        @endif

        <!-- Search Input -->
        @if (LaramediaConfig::showSearchFilter())
            @include('laramedia::partials.search')
        @endif
    </div>
</div>

{{-- No Files Yet --}}
<div id="laramedia-no-files-container">
    <img src="{{ asset('vendor/laramedia/images/no-files-yet.png') }}">
</div>

{{-- Loaded Files Container --}}
<ul id="laramedia-files-container"></ul>
