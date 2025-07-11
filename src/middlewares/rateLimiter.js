import rateLimit from "express-rate-limit";

/**
 * Rate limiter para endpoints de autenticación
 * Limita a 20 intentos por 5 minutos (ajustado para producción)
 */
export const authLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutos
  max: 20, // máximo 20 intentos
  message: {
    error: "Demasiados intentos de login, intenta más tarde",
    retryAfter: "5 minutos"
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: "Demasiados intentos de login, intenta más tarde",
      retryAfter: "5 minutos"
    });
  }
});

/**
 * Rate limiter para endpoints generales de la API
 * Limita a 2000 requests por 15 minutos (ajustado para producción)
 */
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 2000, // máximo 2000 requests
  message: {
    error: "Demasiadas peticiones, intenta más tarde",
    retryAfter: "15 minutos"
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: "Demasiadas peticiones, intenta más tarde",
      retryAfter: "15 minutos"
    });
  }
});

/**
 * Rate limiter para creación de recursos
 * Limita a 10 creaciones por 15 minutos
 */
export const createLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10, // máximo 10 creaciones
  message: {
    error: "Demasiadas creaciones, intenta más tarde",
    retryAfter: "15 minutos"
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: "Demasiadas creaciones, intenta más tarde",
      retryAfter: "15 minutos"
    });
  }
});

/**
 * Rate limiter para búsquedas
 * Limita a 50 búsquedas por 15 minutos
 */
export const searchLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 50, // máximo 50 búsquedas
  message: {
    error: "Demasiadas búsquedas, intenta más tarde",
    retryAfter: "15 minutos"
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: "Demasiadas búsquedas, intenta más tarde",
      retryAfter: "15 minutos"
    });
  }
}); 