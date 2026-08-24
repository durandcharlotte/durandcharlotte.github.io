# Projects

1- NaiNUQ

<div class="nainuq-container">

  <section class="hero">
    <div class="logo-container">
      <img src="{{ '/images/logo_nainuq_no_bg.png' | relative_url }}"
           alt="NaiNUQ logo">
    </div>

    <h1>NaiNUQ</h1>

    <p class="tagline">
      A deep-learning emulator of the NANUQ sea-ice model
    </p>
  </section>

  <section class="description">
    <p>
      <strong>NaiNUQ</strong> is a neural-network-based emulator trained to
      reproduce the evolution of sea ice simulated by NANUQ, a numerical
      sea-ice model for the Arctic basin. It substantially reduces the
      computational cost of sea-ice simulations while maintaining high fidelity
      to the original model.
    </p>

    <p>
      Designed for ensemble experiments, uncertainty quantification, and
      data-assimilation workflows, NaiNUQ is available at four temporal
      resolutions (1 h, 6 h, 12 h, and 24 h) and includes pre-trained model
      weights ready for use.
    </p>
  </section>

  <section class="cta-section">

    <div class="cta-card primary">
      <div class="cta-label">Access the code</div>

      <div class="cta-title">GitHub</div>

      <p class="cta-subtitle">
        Repository, documentation, and pre-trained model weights.
      </p>

      <a href="https://github.com/nanuqhub/nainuq"
         class="cta-link"
         target="_blank"
         rel="noopener noreferrer">
        Go to repository →
      </a>
    </div>

    <div class="cta-card secondary">
      <div class="cta-label">Read the publication</div>

      <div class="cta-title">Preprint</div>

      <p class="cta-subtitle">
        Ocean-aware sea-ice emulator for hybrid coupled prediction systems.
      </p>

      <a href="https://doi.org/10.22541/essoar.15007260/v1"
         class="cta-link"
         target="_blank"
         rel="noopener noreferrer">
        Read on ESS Open Archive →
      </a>
    </div>

  </section>

  <section class="features">
    <h2>Technical specifications</h2>

    <div class="features-grid">

      <div class="feature-item">
        <div class="feature-label">Architecture</div>
        <div class="feature-value">
          U-Net with physics-informed constraints
        </div>
      </div>

      <div class="feature-item">
        <div class="feature-label">Spatial resolution</div>
        <div class="feature-value">
          Arctic basin at 1°
        </div>
      </div>

      <div class="feature-item">
        <div class="feature-label">Temporal resolutions</div>
        <div class="feature-value">
          1 h, 6 h, 12 h, and 24 h
        </div>
      </div>

      <div class="feature-item">
        <div class="feature-label">Stability</div>
        <div class="feature-value">
          Multi-year simulations
        </div>
      </div>

      <div class="feature-item">
        <div class="feature-label">Computational speedup</div>
        <div class="feature-value">
          Approximately 100× faster than NANUQ
        </div>
      </div>

    </div>
  </section>

  <section class="team">
    <p>
      Developed at <strong>IGE (Institut des Géosciences et de
      l'Environnement)</strong> as part of the <strong>SASIP</strong> project
      by Charlotte Durand, Pierre Rampal, and Laurent Brodeau.
    </p>
  </section>

</div>

## SIT emulator and 4D--Var