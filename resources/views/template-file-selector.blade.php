<template id="laramedia-file-selector-template" class="laramedia-modal-template">
    <div id="laramedia-file-selector-container" class="laramedia-modal-container">
        <div id="laramedia-file-selector-inner-container" class="laramedia-modal-inner-container">

            <!-- Modal Header -->
            <div id="laramedia-file-selector-header" class="laramedia-modal-header">

                <!-- Title -->
                <div id="laramedia-file-selector-header-title" class="laramedia-modal-header-title">
                    Select Files
                </div>

                <!-- Icons -->
                <div id="laramedia-file-selector-header-buttons" class="laramedia-modal-header-buttons">

                    <!-- Upload -->
                    <button id="laramedia-file-selector-upload-button" class="laramedia-file-selector-bar-button laramedia-modal-bar-button" title="Upload" laramedia-bar-label="upload">
                        <img src="{{ asset('vendor/laramedia/images/icon-upload.png') }}">
                    </button>

                    <!-- Close -->
                    <button id="laramedia-file-selector-close-button" class="laramedia-file-selector-bar-button laramedia-modal-bar-button" title="Close" laramedia-bar-label="close">
                        <img src="{{ asset('vendor/laramedia/images/icon-close.png') }}">
                    </button>
                </div>
            </div>

            <!-- Modal Body -->
            <div id="laramedia-file-selector-body" class="laramedia-modal-body">

                <!-- Actions -->
                <div id="laramedia-actions-container">

                    <!-- Actions Left Bar -->
                    <div id="laramedia-actions-left-container">

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
            </div>

            <!-- Modal Footer -->
            <div id="laramedia-file-selector-footer" class="laramedia-modal-footer">
                <button disabled="true" id="laramedia-select-files-button" type="button" class="btn btn-primary">Select Files</button>
            </div>
        </div>
    </div>
</template>
