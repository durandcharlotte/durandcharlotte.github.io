<div class="hero">
  <!-- Video: autoplay, muted, loop, playsinline so browsers allow autoplay -->
  <video
    class="hero__video"
    poster="{{ '/assets/images/sea_ice.jpg' | relative_url }}"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-hidden="true"
  >
    <source src="{{ '/assets/videos/lala.mp4'  | relative_url }}" type="video/mp4">
    <!-- If the browser can't play video, the poster image will be used -->
  </video>

  <!-- Fallback background image (used when video is hidden or unavailable) -->
  <div class="hero__bg" style="background-image: url('{{ '/assets/images/sea_ice.jpg' | relative_url }}')"></div>

  <div class="hero__overlay" aria-hidden="true"></div>

  <div class="hero__content reveal">
    <h2 class="hero__title">Sea-ice data-driven emulation</h2>
    <p class="hero__subtitle">Accelerating sea ice modeling with neural networks!</p>
  </div>
</div>

<p>Welcome — I'm <strong>Charlotte Durand</strong>. I am currently a PostDoc student at IGE in Grenoble working as part of the SASIP project on sea-ice emulators!</p>