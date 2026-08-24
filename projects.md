# Projects

<body>
  <div class="nainuq-container">
    <div class="hero">
      <div class="logo-container">
        <img src="images/logo_nainuq_no_bg.png" alt="NaiNUQ logo">
      </div>
      <h1>NaiNUQ</h1>
      <p class="tagline">A deep learning emulator of the NANUQ sea-ice model</p>
    </div>

    <div class="description">
      <p><strong>NaiNUQ</strong> is a neural network-based emulator trained to reproduce the outputs of NANUQ, a numerical sea-ice model for the Arctic basin. It dramatically reduces computational cost while maintaining high fidelity to the original physics-based simulations.</p>
      <p>Designed for ensemble experiments, uncertainty quantification, and data-assimilation workflows, NaiNUQ is available at four temporal resolutions (1h, 6h, 12h, 24h) and includes pre-trained model weights ready for use.</p>
    </div>

    <div class="cta-section">
      <div class="cta-card primary">
        <div class="cta-label">Access the code</div>
        <div class="cta-title">GitHub</div>
        <p class="cta-subtitle">View the repository, documentation, and pre-trained weights</p>
        <a href="https://github.com/nanuqhub/nainuq" class="cta-link">Go to repository →</a>
      </div>

      <div class="cta-card secondary">
        <div class="cta-label">Read the publication</div>
        <div class="cta-title">Preprint</div>
        <p class="cta-subtitle">Ocean-aware sea-ice emulator for hybrid coupled prediction systems</p>
        <a href="https://doi.org/10.22541/essoar.15007260/v1" class="cta-link">Read on ESS Open Archive →</a>
      </div>
    </div>

    <div class="features">
      <h3>Technical specifications</h3>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-label">Architecture</div>
          <div class="feature-value">U-Net with physics-informed constraints</div>
        </div>
        <div class="feature-item">
          <div class="feature-label">Spatial resolution</div>
          <div class="feature-value">Arctic basin at 1°</div>
        </div>
        <div class="feature-item">
          <div class="feature-label">Temporal resolutions</div>
          <div class="feature-value">1h, 6h, 12h, 24h</div>
        </div>
        <div class="feature-item">
          <div class="feature-label">Skill (vs. observations)</div>
          <div class="feature-value">77.9% correlation</div>
        </div>
        <div class="feature-item">
          <div class="feature-label">Stability</div>
          <div class="feature-value">Multi-year simulations</div>
        </div>
        <div class="feature-item">
          <div class="feature-label">Computational speedup</div>
          <div class="feature-value">~100x faster than physics-based</div>
        </div>
      </div>
    </div>

    <div class="team">
      <p>Developed at <strong>IGE (Institut des Géosciences et de l'Environnement)</strong> as part of the <strong>SASIP</strong> project by Charlotte Durand, Pierre Rampal, and Laurent Brodeau.</p>
    </div>
  </div>
</body>
</html>

## SIT emulator and 4D--Var
