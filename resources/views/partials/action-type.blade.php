<div id="laramedia-type-action-container" class="laramedia-action-select-box-container">
    <select id="laramedia-type-select-box" class="laramedia-action-select-box">
        <option value="">Type</option>
        @foreach (LaramediaConfig::typeFiltersAllowedOptions() as $key => $value)
            <option value="{{ $key }}">{{ $value }}</option>
        @endforeach
    </select>
</div>
